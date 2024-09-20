/**
 * @description This class is used to interact with Membership Levels in TidyHQ.
 * @class
 */
export class MembershipLevelsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all membership levels.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_MembershipLevels>} - The list of membership levels.
     */
    getMembershipLevels(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_MembershipLevels>;
    /**
     * @description Get a single membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_MembershipLevel>} - The membership level.
     */
    getMembershipLevel(membership_level_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_MembershipLevel>;
    /**
     * @description Get pricing variations for a membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_PricingVariation>} - The pricing variations for the membership level.
     */
    getPricingVariations(membership_level_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_PricingVariation>;
}
import { Rest } from "./utils/Rest.js";
