/**
 * @description This class is used to interact with Memberships in TidyHQ.
 * @class
 */
export class V2_MembershipLevelsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of membership levels from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-membership_levels
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {string} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of memberships per page to return.
     * @param {number} [options.offset] - The number of memberships to skip.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @returns {Promise<TidyAPI_V2_MembershipLevels>} - An array of membership levels.
     */
    getMembershipLevels(options?: {
        access_token?: string | undefined;
        updated_before?: string | undefined;
        updated_since?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        all?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V2_MembershipLevels>;
    /**
     * @description Create a membership in TidyHQ.
     * @link https://tidyhq.readme.io/reference/create-membership-level-subscription
     * @param {string} membership_level_id - The id of the membership level to subscribe to.
     * @param {Tidy_V2_PostSubscriptionParams} subscription - The subscription parameters.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_SubscriptionPost>} - The subscription, membership, payment url and invoice id.
     */
    createMembership(membership_level_id: string, subscription: Tidy_V2_PostSubscriptionParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_SubscriptionPost>;
}
import { Rest } from "../utils/Rest.js";
