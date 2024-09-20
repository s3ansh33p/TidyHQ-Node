/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
export class OrganizationAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get the organization associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Organization>} - The organization.
     */
    getOrganization(options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Organization>;
}
import { Rest } from "./utils/Rest.js";
