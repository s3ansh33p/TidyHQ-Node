/**
 * @description This class is used to interact with Emails in TidyHQ.
 * @class
 */
export class EmailsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get the emails associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Emails>} - The emails.
     */
    getEmails(options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Emails>;
    /**
     * @description Get a specific email associated with the access token.
     * @param {string} email_id - The ID of the email.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Email>} - The email.
     */
    getEmail(email_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Email>;
    /**
     * @description Create a new email.
     * @param {object} email - The email to create.
     * @param {string} email.subject - The subject of the email.
     * @param {string} email.body - The body of the email.
     * @param {number[]} email.contacts - The contacts to send the email to.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Email>} - The email.
     */
    createEmail(email: {
        subject: string;
        body: string;
        contacts: number[];
    }, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Email>;
    #private;
}
import { Rest } from "./utils/Rest.js";
