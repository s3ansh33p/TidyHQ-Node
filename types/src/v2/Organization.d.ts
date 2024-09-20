/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
export class V2_OrganizationAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Returns the organization the current token is associated with.
     * @link https://tidyhq.readme.io/reference/get-organization
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Organization>} - The organization.
     */
    getOrganization(options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Organization>;
    /**
     * @description Returns all admins configured / provisioned for the current organization.
     * @link https://tidyhq.readme.io/reference/get-organization-admins
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of admins to return.
     * @param {number} [options.offset] - The number of admins to skip.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {string} [options.updated_before] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V2_Contacts>} - The admins.
     */
    getAdmins(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        updated_since?: string | undefined;
        updated_before?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Contacts>;
    /**
     * @description Returns all roles configured / provisioned for the current organization.
     * @link https://tidyhq.readme.io/reference/get-organization-roles
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of roles to return.
     * @param {number} [options.offset] - The number of roles to skip.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {string} [options.updated_before] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V2_OrganizationRoles>} - The roles.
     */
    getRoles(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        updated_since?: string | undefined;
        updated_before?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_OrganizationRoles>;
}
import { Rest } from "../utils/Rest.js";
import { TidyAPI_V2_Organization, TidyAPI_V2_Contacts, TidyAPI_V2_OrganizationRoles } from "../types.js";
