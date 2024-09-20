export = TidyHQWebhook;
/**
 * @description This class is used to listen and act on Webhooks.
 * @class
 */
declare class TidyHQWebhook {
    /**
     * @description Create a new instance of the TidyHQWebhook class.
     * @param {string} webhookId - The ID of the webhook.
     * @param {string} signingKey - The signing key for the webhook.
     * @constructor
     */
    constructor(webhookId: string, signingKey: string);
    /**
     * @type {Record<string, Function>}
     */
    callbacks: Record<string, Function>;
    signingKey: string;
    webhookId: string;
    /**
     * @param {string} event
     * @param {Function} callback
     */
    registerCallback(event: string, callback: Function): void;
    /**
     * @param {string} event
     * @param {object} data
     */
    handleEvent(event: string, data: object): void;
    /**
     * @description Verify a message from TidyHQ.
     * @param {string} tidySignatureHeader - The signature header from TidyHQ.
     * @param {string} body - The raw body of the message.
     * @param {string} httpMethod - The HTTP method of the webhook.
     * @returns {void | string} - If an error occurs, the error message is returned.
     */
    verifyAndHandle(tidySignatureHeader: string, body: string, httpMethod?: string): void | string;
    /**
     * @description Verify a message from TidyHQ.
     * @param {string} tidySignatureHeader - The signature header from TidyHQ.
     * @param {string} body - The raw body of the message.
     * @param {string} httpMethod - The HTTP method of the webhook.
     * @returns {Promise<Tidy_V2_WebhookMessage>} - The message from the webhook.
     */
    verify(tidySignatureHeader: string, body: string, httpMethod?: string): Promise<Tidy_V2_WebhookMessage>;
    /**
     *
     * @param {string | null | undefined} header
     * @param {string} scheme
     * @returns {{ timestamp: number, signatures: string[] } | null}
     */
    parseHeader(header: string | null | undefined, scheme: string): {
        timestamp: number;
        signatures: string[];
    } | null;
}
