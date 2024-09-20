/**
 * @description This class is used to interact with Contacts in TidyHQ.
 * @class
 */
export class V2_ContactsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of contacts from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-contacts
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {string} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of contacts per page to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {boolean} [options.registered]  - When given, returns only users with / without a user account attached.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {string[]} [options.ids] - When given, filters to those matching the given IDs. Can be combined with scope to specify the type of ID.
     * @param {"contact_id_number" | "sports_australia_connect"} [options.scope] - If specified, applies ids to the specified type. If not given, will default to check the id reference or the id.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {Tidy_V2_ContactFilterEqualsOptions} [options.filter_equals] - Object with keys and values to filter by.
     * @returns {Promise<TidyAPI_V2_Contacts>} - An array of contact objects.
     */
    getContacts(options?: {
        access_token?: string | undefined;
        updated_before?: string | undefined;
        updated_since?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        registered?: boolean | undefined;
        all?: boolean | undefined;
        ids?: string[] | undefined;
        scope?: "contact_id_number" | "sports_australia_connect" | undefined;
        search_terms?: string | undefined;
        filter_equals?: Tidy_V2_ContactFilterEqualsOptions | undefined;
    } | undefined): Promise<TidyAPI_V2_Contacts>;
    /**
     * @todo REFACTOR TYPES AND TEST
     * @description Creates a new contact with the given data in TidyHQ.
     * @link https://tidyhq.readme.io/reference/create-contact
     * @param {Tidy_V2_Contact} contact - The contact to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Contacts>} - The created contact.
     */
    createContact(contact: Tidy_V2_Contact, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Contacts>;
    /**
     * @description Get a single contact from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-contact
     * @param {string} [contactID = "me"] - The ID of the contact to get (me / default returns the contact of the user who authorized the application)
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Contact>} - The contact object.
     **/
    getContact(contactID?: string | undefined, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Contact>;
    /**
     * @description Adds a note to a specified contact.
     * @link https://tidyhq.readme.io/reference/create-contact-note
     * @param {string} contact_id - The ID of the contact to create the note for.
     * @param {string} note - The note to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Note>} - The created note.
     */
    createContactNote(contact_id: string, note: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Note>;
    /**
     * @description Deletes a specified note from a specified contact.
     * @link https://tidyhq.readme.io/reference/delete-contact-note
     * @param {string} contact_id - The ID of the contact to delete the note from.
     * @param {string} note_id - The ID of the note to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    deleteContactNote(contact_id: string, note_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_EmptyResponse>;
    /**
     * @description Update a contact in TidyHQ.
     * @link https://tidyhq.readme.io/reference/update-contact
     * @param {string} contact_id - The ID of the contact to update.
     * @param {Tidy_V2_Contact} contact - The new contact data.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Contact>} - The updated contact.
     */
    updateContact(contact_id: string, contact: Tidy_V2_Contact, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V2_Contact>;
    /**
     * @description Gets all memberships for a given single contact.
     * @link https://tidyhq.readme.io/reference/get-contact-memberships
     * @param {string} contact_id - The ID of the contact to find memberships for.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {string} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of contacts per page to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @returns {Promise<TidyAPI_V2_Memberships>} - An array of memberships.
     */
    getContactMemberships(contact_id: string, options?: {
        access_token?: string | undefined;
        updated_before?: string | undefined;
        updated_since?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
    } | undefined): Promise<TidyAPI_V2_Memberships>;
}
import { Rest } from "../utils/Rest.js";
import { TidyAPI_V2_Contacts, TidyAPI_V2_Contact, TidyAPI_V2_Note, TidyAPI_EmptyResponse, TidyAPI_V2_Memberships, Tidy_V2_ContactFilterEqualsOptions, Tidy_V2_Contact } from "../types.js";
