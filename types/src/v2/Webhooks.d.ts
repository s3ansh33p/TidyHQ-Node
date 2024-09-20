/**
 * @description This class is used to interact with Webhooks in TidyHQ.
 * @class
 */
export class V2_WebhooksAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all Webhooks.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Webhooks>} - The list of Webhooks.
     */
    getWebhooks(options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Webhooks>;
    /**
     * @description Get a Webhook by its ID.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Webhook>} - The Webhook.
     */
    getWebhook(id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Webhook>;
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
    createWebhook(url: string, matching_kind: string, description: string, options?: {
        access_token?: string | undefined;
        allow_state_changes?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V2_Webhook>;
    /**
     * @description This function is used to activate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    activateWebhook(id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_EmptyResponse>;
    /**
     * @description Deactivate a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    deactivateWebhook(id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_EmptyResponse>;
    /**
     * @description Delete a Webhook.
     * @param {string} id - The ID of the Webhook.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    deleteWebhook(id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_EmptyResponse>;
}
import { Rest } from "../utils/Rest.js";
import { TidyAPI_V2_Webhooks, TidyAPI_V2_Webhook, TidyAPI_EmptyResponse } from "../types.js";
