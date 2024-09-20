/**
 * @description This class is used to interact with Groups in TidyHQ.
 * @class
 */
export class GroupsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of groups from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of groups to return.
     * @param {number} [options.offset] - The number of groups to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @returns {Promise<TidyAPI_V1_Groups>} - An array of groups.
     */
    getGroups(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        search_terms?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Groups>;
    /**
     * @description Get groups for a contact from TidyHQ.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of groups to return.
     * @param {number} [options.offset] - The number of groups to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @returns {Promise<TidyAPI_V1_Groups>} - An array of groups.
     */
    getGroupsForContact(contact_id: number, options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        search_terms?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Groups>;
    /**
     * @description Get a single group from TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Group>} - A group.
     */
    getGroup(group_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Group>;
    /**
     * @description Create a new group in TidyHQ.
     * @param {string} name - The name of the group.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the group.
     * @returns {Promise<TidyAPI_V1_Group>} - The group.
     */
    createGroup(name: string, options?: {
        access_token?: string | undefined;
        description?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Group>;
    /**
     * @description Update a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.name] - The name of the group.
     * @param {string} [options.description] - The description of the group.
     * @returns {Promise<TidyAPI_V1_Group>} - The group.
     */
    updateGroup(group_id: number, options?: {
        access_token?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Group>;
    /**
     * @description Delete a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteGroup(group_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
    /**
     * @description This function is used to add a contact to a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    addContactToGroup(group_id: number, contact_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_EmptyResponse>;
    /**
     * @description This function is used to remove a contact from a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    removeContactFromGroup(group_id: number, contact_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_EmptyResponse>;
}
import { Rest } from "./utils/Rest.js";
