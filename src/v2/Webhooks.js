/**
 * @fileoverview This file contains functions for interacting with Webhooks in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");

/**
 * @description This class is used to interact with Webhooks in TidyHQ.
 * @class
 */
class WebhooksAPI {

    /**
     * @description This function is used to create a new instance of the WebhooksAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the WebhooksAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of all Webhooks.
     * @returns {object} - The list of Webhooks.
     */
    async getWebhooks() {
        let webhooks = [];
        await axios.get(`https://api.tidyhq.com/v2/webhooks?access_token=${this.access_token}`).then((response) => {
            webhooks = response.data;
        }).catch((error) => {
            throw new Error(`Webhooks.getWebhooks: ${error}`);
        });
        return webhooks;
    }

    /**
     * @description This function is used to get a Webhook by its ID.
     * @param {string} id - The ID of the Webhook.
     * @returns {object} - The Webhook.
     */
    async getWebhookByID(id) {
        let webhook = {};
        await axios.get(`https://api.tidyhq.com/v2/webhooks/${id}?access_token=${this.access_token}`).then((response) => {
            webhook = response.data;
        }).catch((error) => {
            throw new Error(`Webhooks.getWebhookByID: ${error}`);
        });
        return webhook;
    }

    /**
     * @description This function is used to create a new Webhook.
     * @param {string} url - The URL of the Webhook to listen to.
     * @param {string} matching_kind - The kind of event to listen for.
     * @param {string} description - The description of the Webhook.
     * @param {boolean} allow_state_changes - ???
     * @returns {object} - The new Webhook.
     * @todo Find out what allow_state_changes does.
     */
    async createWebhook(url, matching_kind, description, allow_state_changes = true) {
        let webhook = {};
        await axios.post(`https://api.tidyhq.com/v2/webhooks?access_token=${this.access_token}`, {
            "url": url,
            "matching_kind": matching_kind,
            "description": description,
            "allow_state_changes": allow_state_changes
        }).then((response) => {
            webhook = response.data;
        }).catch((error) => {
            throw new Error(`Webhooks.createWebhook: ${error}`);
        });
        return webhook;
    }

    /**
     * @description This function is used to activate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @returns {boolean} - Whether the request was successful or not.
     */
    async activateWebhook(id) {
        let success = false;
        // if status code is 204, then success
        await axios.post(`https://api.tidyhq.com/v2/webhooks/${id}/activate?access_token=${this.access_token}`).then((response) => {
            if (response.status == 204) {
                success = true;
            }
        }).catch((error) => {
            // throw new Error(`Webhooks.activateWebhook: ${error}`);
            success = false;
        });
        return success;
    }

    /**
     * @description This function is used to deactivate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @returns {boolean} - Whether the request was successful or not.
     */
    async deactivateWebhook(id) {
        let success = false;
        // if status code is 204, then success
        await axios.post(`https://api.tidyhq.com/v2/webhooks/${id}/deactivate?access_token=${this.access_token}`).then((response) => {
            if (response.status == 204) {
                success = true;
            }
        }).catch((error) => {
            // throw new Error(`Webhooks.deactivateWebhook: ${error}`);
            success = false;
        });
        return success;
    }

    /**
     * @description This function is used to delete a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @returns {boolean} - Whether the request was successful or not.
     */
    async deleteWebhook(id) {
        let success = false;
        // if status code is 204, then success
        await axios.delete(`https://api.tidyhq.com/v2/webhooks/${id}?access_token=${this.access_token}`).then((response) => {
            if (response.status == 204) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Webhooks.deleteWebhook: ${error}`);
            success = false;
        });
        return success;
    }

}

module.exports = { WebhooksAPI };