/**
 * @description This class is used to interact with Memberships in TidyHQ.
 * @class
 */
export class V2_MembershipAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of memberships from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-memberships
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {string} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of memberships per page to return.
     * @param {number} [options.offset] - The number of memberships to skip.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {boolean} [options.active]  - When given, returns only users with active / inactive memberships (active is partial and activated status).
     * @returns {Promise<TidyAPI_V2_Memberships>} - An array of memberships.
     */
    getMemberships(options?: {
        access_token?: string | undefined;
        updated_before?: string | undefined;
        updated_since?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        all?: boolean | undefined;
        active?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V2_Memberships>;
    /**
     * @description Get a single membership from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-membership
     * @param {string} membership_id - The id of the membership to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Membership>} - The membership.
     */
    getMembership(membership_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Membership>;
    /**
     * @description Get a list of subscriptions from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-subscriptions
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {string} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of subscriptions per page to return.
     * @param {number} [options.offset] - The number of subscriptions to skip.
     * @param {boolean} [options.active]  - When given, returns only users with active / inactive subscriptions (active is partial and activated status).
     * @returns {Promise<TidyAPI_V2_Subscriptions>} - An array of subscriptions.
     */
    getSubscriptions(options?: {
        access_token?: string | undefined;
        updated_before?: string | undefined;
        updated_since?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        active?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V2_Subscriptions>;
    /**
     * @description Create/renew a subscription for a membership in TidyHQ.
     * @link https://tidyhq.readme.io/reference/create-membership-subscription
     * @param {string} membership_id - The id of the membership to create a subscription for.
     * @param {Tidy_V2_PostSubscriptionParams} subscription - The subscription parameters.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_SubscriptionPost>} - The subscription, membership, payment url and invoice id.
     */
    renewSubscriptionForMembership(membership_id: string, subscription: Tidy_V2_PostSubscriptionParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_SubscriptionPost>;
}
import { Rest } from "../utils/Rest.js";
