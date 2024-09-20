/**
 * @description This class is used to interact with Memberships in TidyHQ.
 * @class
 */
export class MembershipsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all memberships.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.active] - Whether to return active memberships.
     * @param {string} [options.updated_since] - The date to return memberships updated since in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Memberships>} - The list of memberships.
     */
    getMemberships(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
        active?: boolean | undefined;
        updated_since?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Memberships>;
    /**
     * @description Get a list of all memberships for a contact.
     * @param {string} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.active] - Whether to return active memberships.
     * @param {string} [options.updated_since] - The date to return memberships updated since in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Memberships>} - The list of memberships.
     */
    getMembershipsForContact(contact_id: string, options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
        active?: boolean | undefined;
        updated_since?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Memberships>;
    /**
     * @description Get a list of all memberships for a membership level.
     * @param {string} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.active] - Whether to return active memberships.
     * @param {string} [options.updated_since] - The date to return memberships updated since in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Memberships>} - The list of memberships.
     */
    getMembershipsForMembershipLevel(membership_level_id: string, options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
        active?: boolean | undefined;
        updated_since?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Memberships>;
    /**
     * @description Get a single membership.
     * @param {string} membership_id - The ID of the membership.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Membership>} - The membership.
     */
    getMembership(membership_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Membership>;
    #private;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_Memberships, TidyAPI_V1_Membership } from "types.js";
