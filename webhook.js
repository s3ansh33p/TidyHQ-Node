/**
 * @fileoverview This file contains a wrapper for a TidyHQ Webhook.
 * @author Sean McGinty <newfolderlocation@gmail.com>
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

    /**
     * @type {Record<string, Function>}
     */
    callbacks = {};

    /**
     * @description Create a new instance of the TidyHQWebhook class.
     * @param {string} webhookId - The ID of the webhook.
     * @param {string} signingKey - The signing key for the webhook.
     * @constructor
     */
    constructor(webhookId, signingKey) {
        this.signingKey = signingKey;
        this.webhookId = webhookId;
    }

    /**
     * @param {string} event 
     * @param {Function} callback 
     */
    registerCallback(event, callback) {
        this.callbacks[event] = callback;
    }

    /**
     * @param {string} event 
     * @param {object} data 
     */
    handleEvent(event, data) {
        if (this.callbacks[event]) {
            this.callbacks[event](data);
        } else {
            console.log("No callback registered for event: " + event);
            console.log(data);
        }
    }

    /**
     * @description Verify a message from TidyHQ.
     * @param {string} tidySignatureHeader - The signature header from TidyHQ.
     * @param {string} body - The raw body of the message.
     * @param {string} httpMethod - The HTTP method of the webhook.
     * @returns {void | string} - If an error occurs, the error message is returned.
     */
    verifyAndHandle(tidySignatureHeader, body, httpMethod = 'POST') {
        this.verify(tidySignatureHeader, body, httpMethod).then((data) => {
            this.handleEvent(data.kind, data.data);
        }).catch((error) => {
            return error;
        });
    }

    /**
     * @description Verify a message from TidyHQ.
     * @param {string} tidySignatureHeader - The signature header from TidyHQ.
     * @param {string} body - The raw body of the message.
     * @param {string} httpMethod - The HTTP method of the webhook.
     * @returns {Promise<Tidy_V2_WebhookMessage>} - The message from the webhook.
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

        const timestampedPayload = `${timestamp}.${body}`

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

        const data = JSON.parse(body);

        if (data.webhook_id !== this.webhookId) {
            throw new Error(`There has been a webhook ID mismatch, expected ${this.webhookId} got ${data.webhook_id}`)
        }

        if (data.http_method !== httpMethod) {
            throw new Error(`There has been a HTTP method mismatch, expected ${httpMethod} got ${data.http_method}`)
        }

        return data
    }

    /**
     * 
     * @param {string | null | undefined} header 
     * @param {string} scheme 
     * @returns {{ timestamp: number, signatures: string[] } | null}
     */
    parseHeader(header, scheme) {
        if (typeof header !== 'string') {
            return null
        }

        return header.split(',').reduce(
            /**
             * @param {{ timestamp: number, signatures: string[] }} accum
             * @param {string} item
             * @returns {{ timestamp: number, signatures: string[] }}
             */
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