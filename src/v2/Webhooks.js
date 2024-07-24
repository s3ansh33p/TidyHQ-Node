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
     * @param {string} [options?.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - The list of Webhooks. [!] Type
     */
    async getWebhooks(options = {}) {
        return await this.rest.get(`/v2/webhooks`, options?.access_token);
    }

    /**
     * @description Get a Webhook by its ID.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options?.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - The Webhook. [!] Type
     */
    async getWebhook(id, options = {}) {
        return await this.rest.get(`/v2/webhooks/${id}`, options?.access_token);
    }

    /**
     * @description Create a new Webhook.
     * @param {string} url - The URL of the Webhook to listen to.
     * @param {string} matching_kind - The kind of event to listen for.
     * @param {string} description - The description of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options?.access_token] - The access token to use.
     * @param {boolean} [options.allow_state_changes] - If the Webhook should allow state changes, or terminate on the first state change.
     * @returns {Promise<TidyAPI_Response>} - The new Webhook. [!] Type
     * @todo Find out what allow_state_changes does.
     */
    async createWebhook(url, matching_kind, description, options = {}) {
        return await this.rest.post(`/v2/webhooks`, {
            "url": url,
            "matching_kind": matching_kind,
            "description": description,
            "allow_state_changes": options.allow_state_changes
        }, options?.access_token);
    }

    /**
     * @description This function is used to activate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options?.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    async activateWebhook(id, options) {
        return await this.rest.post(`/v2/webhooks/${id}/activate`, {}, options?.access_token);
    }

    /**
     * @description Deactivate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options?.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    async deactivateWebhook(id, options = {}) {
        return await this.rest.post(`/v2/webhooks/${id}/deactivate`, {}, options?.access_token);
    }

    /**
     * @description Delete a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options?.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    async deleteWebhook(id, options = {}) {
        return await this.rest.delete(`/v2/webhooks/${id}`, {}, options?.access_token);
    }

}

module.exports = { V2_WebhooksAPI };