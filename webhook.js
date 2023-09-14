/**
 * @fileoverview This file contains a wrapper for a TidyHQ Webhook.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const crypto = require("crypto");

/**
 * @description This class is used to listen and act on Webhooks.
 * @class
 */
class TidyHQWebhook {

    // callbacks
    callbacks = {};

    /**
     * @description This function is used to create a new instance of the TidyHQWebhook class.
     * @param {string} webhookId - The ID of the webhook.
     * @param {string} signingKey - The signing key for the webhook.
     * @returns {object} - A new instance of the TidyHQWebhook class.
     * @constructor
     */
    constructor(webhookId, signingKey) {
        this.signingKey = signingKey;
        this.webhookId = webhookId;
    }

    registerCallback(event, callback) {
        this.callbacks[event] = callback;
    }

    handleEvent(event, data) {
        if (this.callbacks[event]) {
            this.callbacks[event](data);
        } else {
            console.log("No callback registered for event: " + event);
            console.log(data);
        }
    }

    verifyAndHandle(tidySignatureHeader, body, httpMethod = 'POST') {
        this.verify(tidySignatureHeader, body, httpMethod).then((data) => {
            console.log("Verified event: " + data.kind + " at " + new Date().toISOString());
            this.handleEvent(data.kind, data.data);
        }).catch((error) => {
            console.log(data);
            console.log(`[ERROR] Webhooks.verifyAndHandle: ${error} for ${tidySignatureHeader} ${body.kind} ${httpMethod}`);
        });
    }

    /**
     * @description This function is used to verify a message from TidyHQ.
     * @param {string} tidySignatureHeader - The signature header from TidyHQ.
     * @param {string} body - The body of the message.
     * @param {string} httpMethod - The HTTP method of the webhook.
     * @returns {object} - The data from the webhook.
     */
    async verify(tidySignatureHeader, body, httpMethod = 'POST') {
        const signingKey = Buffer.from(this.signingKey, 'base64')
        const details = this.parseHeader(tidySignatureHeader, 'v1')
        const tolerance = 300

        if (!details || details.timestamp === -1) {
            throw new Error('Unable to extract timestamp and signatures from header')
        }

        if (!details.signatures.length) {
            throw new Error('No signatures found with expected scheme')
        }

        const timestamp = details.timestamp
        const signature = details.signatures[0]

        const timestampedPayload = `${timestamp}.${JSON.stringify(body)}`

        const expectedSignature = crypto.createHmac('sha256', signingKey)
            .update(timestampedPayload, 'utf8')
            .digest('hex')

        if (signature !== expectedSignature) {
            throw new Error('Signature mismatch')
        }

        const timestampAge = Math.floor(Date.now() / 1000) - timestamp

        if (tolerance > 0 && timestampAge > tolerance) {
            throw new Error('Timestamp outside the tolerance zone')
        }

        const data = body

        if (data.webhook_id !== this.webhookId) {
            throw new Error(`There has been a webhook ID mismatch, expected ${this.webhookId} got ${data.webhook_id}`)
        }

        if (data.http_method !== httpMethod) {
            throw new Error(`There has been a HTTP method mismatch, expected ${httpMethod} got ${data.http_method}`)
        }

        return data
    }

    parseHeader(header, scheme) {
        if (typeof header !== 'string') {
            return null
        }

        return header.split(',').reduce(
            (accum, item) => {
                const kv = item.split('=')

                if (kv[0] === 't') {
                    accum.timestamp = parseInt(kv[1], 10)
                }

                if (kv[0] === scheme) {
                    accum.signatures.push(kv[1])
                }

                return accum
            },
            {
                timestamp: -1,
                signatures: [],
            }
        )
    }

}

module.exports = TidyHQWebhook;