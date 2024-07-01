/**
 * @fileoverview This file contains functions for interacting with Webhooks in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.1.0
 * @license GPL-3.0
 */

const axios = require("axios");

/**
 * @description This class is used to interact with Webhooks in TidyHQ.
 * @class
 */
class V2_WebhooksAPI {

    /**
     * @description This function is used to create a new instance of the V2_WebhooksAPI class.
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {object} - A new instance of the V2_WebhooksAPI class.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all Webhooks.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The list of Webhooks.
     */
    async getWebhooks(options = {}) {
        let webhooks = [];
        await this.rest.get(`/v2/webhooks`, options.access_token).then((response) => {
            webhooks = response.data;
        }).catch((error) => {
            throw new Error(`V2.Webhooks.getWebhooks: ${error}\n${error.response.data}`);
        });
        return webhooks;
    }

    /**
     * @description This function is used to get a Webhook by its ID.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The Webhook.
     */
    async getWebhook(id, options = {}) {
        let webhook = {};
        await this.rest.get(`/v2/webhooks/${id}`, options.access_token).then((response) => {
            webhook = response.data;
        }).catch((error) => {
            throw new Error(`V2.Webhooks.getWebhook: ${error}\n${error.response.data}`);
        });
        return webhook;
    }

    /**
     * @description This function is used to create a new Webhook.
     * @param {string} url - The URL of the Webhook to listen to.
     * @param {string} matching_kind - The kind of event to listen for.
     * @param {string} description - The description of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {boolean} [options.allow_state_changes] - If the Webhook should allow state changes, or terminate on the first state change.
     * @returns {object} - The new Webhook.
     * @todo Find out what allow_state_changes does.
     */
    async createWebhook(url, matching_kind, description, options = {}) {
        let webhook = {};
        await this.rest.post(`/v2/webhooks`, {
            "url": url,
            "matching_kind": matching_kind,
            "description": description,
            "allow_state_changes": options.allow_state_changes
        }, options.access_token).then((response) => {
            webhook = response.data;
        }).catch((error) => {
            throw new Error(`V2.Webhooks.createWebhook: ${error}\n${error.response.data}`);
        });
        return webhook;
    }

    /**
     * @description This function is used to activate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Whether the request was successful or not.
     */
    async activateWebhook(id, options) {
        let success = false;
        // if status code is 204, then success
        await this.rest.post(`/v2/webhooks/${id}/activate`, {}, options.access_token).then((response) => {
            if (response.status == 204) {
                success = true;
            }
        }).catch((error) => {
            // throw new Error(`Webhooks.activateWebhook: ${error}\n${error.response.data}`);
            success = false;
        });
        return success;
    }

    /**
     * @description This function is used to deactivate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Whether the request was successful or not.
     */
    async deactivateWebhook(id, options = {}) {
        let success = false;
        // if status code is 204, then success
        await this.rest.post(`/v2/webhooks/${id}/deactivate`, {}, options.access_token).then((response) => {
            if (response.status == 204) {
                success = true;
            }
        }).catch((error) => {
            // throw new Error(`Webhooks.deactivateWebhook: ${error}\n${error.response.data}`);
            success = false;
        });
        return success;
    }

    /**
     * @description This function is used to delete a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Whether the request was successful or not.
     */
    async deleteWebhook(id, options = {}) {
        let success = false;
        // if status code is 204, then success
        await this.rest.delete(`/v2/webhooks/${id}`, {}, options.access_token).then((response) => {
            if (response.status == 204) {
                success = true;
            }
        }).catch((error) => {
            // throw new Error(`V2.Webhooks.deleteWebhook: ${error}\n${error.response.data}`);
            success = false;
        });
        return success;
    }

}

module.exports = { V2_WebhooksAPI };