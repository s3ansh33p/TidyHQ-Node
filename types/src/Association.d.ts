/**
 * @description This class is used to interact with Associations in TidyHQ.
 * @class
 */
export class AssociationAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get the organizations that fall under the association associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Organizations>} - The list of organizations.
     */
    getOrganizations(options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Organizations>;
    /**
     * @description Get a single organization.
     * @param {string} id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Organization>} - The organization.
     */
    getOrganization(id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Organization>;
    /**
     * @description Get the contacts that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_OrganizationContacts>} - The list of contacts.
     */
    getOrganizationContacts(organization_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_OrganizationContacts>;
    /**
     * @description Get the events that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {string} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {Promise<TidyAPI_V1_Events>} - The list of events.
     */
    getOrganizationEvents(organization_id: string, options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        start_at?: string | undefined;
        end_at?: string | undefined;
        public?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V1_Events>;
    /**
     * @description Get a single event that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    getOrganizationEvent(organization_id: string, event_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Event>;
    /**
     * @description Get the meetings that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_Meetings>} - The list of meetings.
     */
    getOrganizationMeetings(organization_id: string, options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Meetings>;
    /**
     * @description Get a single meeting that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} meeting_id - The ID of the meeting.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Meeting>} - The meeting.
     */
    getOrganizationMeeting(organization_id: string, meeting_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Meeting>;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_Organizations, TidyAPI_V1_Organization, TidyAPI_V1_OrganizationContacts, TidyAPI_V1_Events, TidyAPI_V1_Event, TidyAPI_V1_Meetings, TidyAPI_V1_Meeting } from "types.js";
