/**
 * @fileoverview This file contains functions for interacting with Webhooks in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.1.0
 * @license GPL-3.0
 */

const { Rest } = require("../utils/Rest.js");

/**
 * @description This class is used to interact with Webhooks in TidyHQ.
 * @class
 */
class V2_WebhooksAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of all Webhooks.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Webhooks>} - The list of Webhooks.
     */
    async getWebhooks(options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v2/webhooks`, accessToken);
    }

    /**
     * @description Get a Webhook by its ID.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Webhook>} - The Webhook.
     */
    async getWebhook(id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v2/webhooks/${id}`, accessToken);
    }

    /**
     * @description Create a new Webhook.
     * @param {string} url - The URL of the Webhook to listen to.
     * @param {string} matching_kind - The kind of event to listen for.
     * @param {string} description - The description of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {boolean} [options.allow_state_changes] - If the Webhook should allow state changes, or terminate on the first state change.
     * @returns {Promise<TidyAPI_V2_Webhook>} - The new Webhook.
     */
    async createWebhook(url, matching_kind, description, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.post(`/v2/webhooks`, {
            "url": url,
            "matching_kind": matching_kind,
            "description": description,
            "allow_state_changes": options.allow_state_changes
        }, accessToken);
    }

    /**
     * @description This function is used to activate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    async activateWebhook(id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.post(`/v2/webhooks/${id}/activate`, {}, accessToken);
    }

    /**
     * @description Deactivate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    async deactivateWebhook(id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.post(`/v2/webhooks/${id}/deactivate`, {}, accessToken);
    }

    /**
     * @description Delete a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    async deleteWebhook(id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.delete(`/v2/webhooks/${id}`, {}, accessToken);
    }

}

module.exports = { V2_WebhooksAPI };