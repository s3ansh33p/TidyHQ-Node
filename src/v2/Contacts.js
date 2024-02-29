/**
 * @fileoverview This file contains functions for interacting with Contacts in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 2.1.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("../utils/Builder.js");

/**
 * @description This class is used to interact with Contacts in TidyHQ.
 * @class
 */
class ContactsAPI {

    /**
     * @description This function is used to create a new instance of the ContactsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the ContactsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of contacts from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-contacts
     * @param {object} [options = {}] - The options to use.
     * @param {Date} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {Date} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of contacts per page to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {boolean} [options.registered]  - When given, returns only users with / without a user account attached.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {string[]} [options.ids] - When given, filters to those matching the given IDs. Can be combined with scope to specify the type of ID.
     * @param {"contact_id_number" | "sports_australia_connect"} [options.scope] - If specified, applies ids to the specified type. If not given, will default to check the id reference or the id.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {string[]} [options.filter_equals] - An array of filters to use. Supports first_name, last_name, company, email_address, phone_number, kind, contact_id_number
     * @returns {object[]} - An array of contact objects.
     * @private
     */
    async getContacts(options = {}) {
        let optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset", "registered", "all", "ids[]", "scope", "search_terms", "filter_equals[][]"], options)
        let contacts = [];
        await this.axios.get(`/v2/contacts${optionalParametersString}`).then((response) => {
            contacts = response.data;
        }).catch((error) => {
            console.log(error);
            throw new Error(`V2.Contacts.getContacts: ${error}\n${error.response.data}`);
        });
        return contacts;
    }


    /**
     * @todo REFACTOR TYPES AND TEST
     * @description Creates a new contact with the given data in TidyHQ.
     * @link https://tidyhq.readme.io/reference/create-contact
     * @param {object} contact - The contact to create.
     * @param {string} [contact.id] - The ID of the contact to create.
     * @param {number} [contact.contact_id_reference] - The ID of the contact, used in V1 API.
     * @param {string} [contact.first_name] - The first name of the contact.
     * @param {string} [contact.last_name] - The last name of the contact.
     * @param {string} [contact.nick_name] - The nickname of the contact.
     * @param {string} [contact.company] - The company of the contact.
     * @param {string} [contact.email_address] - The email address of the contact.
     * @param {string} [contact.phone_number] - The phone number of the contact.
     * @param {string} [contact.address1] - The first line of the address of the contact.
     * @param {string} [contact.city] - The city of the contact.
     * @param {string} [contact.state] - The state of the contact.
     * @param {string} [contact.postcode] - The postcode of the contact.
     * @param {string} [contact.gender] - The gender of the contact.
     * @param {string} [contact.birthday] - The birthday of the contact.
     * @param {string} [contact.facebook] - The facebook of the contact.
     * @param {string} [contact.linkedin] - The linkedin of the contact.
     * @param {string} [contact.instagram] - The instagram of the contact.
     * @param {string} [contact.twitter] - The twitter of the contact.
     * @param {string} [contact.details] - The details of the contact.
     * @param {boolean} [contact.subscribed] - Whether the contact is subscribed to a mailing list? TODO: Check this.
     * @param {string} [contact.emergency_contact_person] - The emergency contact person of the contact.
     * @param {string} [contact.emergency_contact_number] - The emergency contact number of the contact.
     * @param {string} [contact.kind] - The kind of the contact.
     * @param {boolean} [contact.is_company] - Whether the contact is a company.
     * @param {string} [contact.contact_id_number] - The contact ID number of the contact. Custom ID numbers must be enabled first in the organization settings.
     * @param {string} [contact.sports_connect_id] - The sports connect ID of the contact.
     * @param {Date} [contact.created_at] - The creation date of the contact.
     * @param {Date} [contact.updated_at] - The last updated date of the contact.
     * @param {Date} [contact.member_since] - The member since date of the contact.
     * @param {string} [contact.status] - The status of the contact.
     * @param {object[]} [contact.custom_fields] - The custom fields of the contact.
     * @param {string} [contact.custom_fields.id] - The ID of thae custom field.
     * @param {string} [contact.custom_fields.title] - The title of a custom field.
     * @param {"string" | "text" | "boolean" | "checkbox_group" | "radio_group" | "file" | "dropdown" | "date"} [contact.custom_fields.type] - The type of a custom field.
     * @param {string | boolean | string[]} [contact.custom_fields.value] - The value of a custom field.
     * @param {object} [contact.organization] - The organization of the contact.
     * @param {string} [contact.organization.id] - The ID of the organization.
     * @param {string} [contact.organization.name] - The name of the organization.
     * @param {string} [contact.organization.domain_prefix] - The domain prefix of the organization.
     * @param {string[]} [contact.organization.permissions] - The permissions the contact has within the organization.
     * @param {object[]} [contact.groups] - The groups the contact is in.
     * @param {string} [contact.groups.id] - The ID of a group.
     * @param {string} [contact.groups.label] - The label of a group.
     * @param {number} [contact.groups.group_id_reference] - The ID of a group, used in V1 API.
     * @param {string} [contact.groups.description] - The description of a group.
     * @param {Date} [contact.groups.created_at] - The creation date of a group.
     * @param {Date} [contact.groups.updated_at] - The last updated date of a group.
     * @param {number} [contact.groups.size] - The number of contacts within this group.
     * @param {string} [contact.groups.image] - The image URL representing a group.
     * @param {object[]} [contact.contact_links] - The contact links of the contact.
     * @param {"family" | "organization"} contact.contact_links.relationship_type - The relationship type of the contact link.
     * @param {string} [contact.contact_links.title] - The title of the contact link.
     * @param {object} [contact.contact_links.metadata] - Optional arbitrary metadata attached to the object.
     * @param {Date} [contact.contact_links.updated_at] - The last updated date of the contact link.
     * @param {Date} [contact.contact_links.created_at] - The creation date of the contact link.
     * @param {string} [contact.contact_links.display_name] - Humanized version of the type field, suitable for diplay.
     * @param {"child" | "parent" | "adult" | "associated" | "personnel" | "personnel_of"} [contact.contact_links.type] - The type of the contact link.
     * @param {string} [contact.contact_links.contact_id] - Alphanumeric ID associated with the contact this link is towards.
     * @param {object[]} [contact.notes] - The notes of the contact.
     * @param {string} [contact.notes.id] - The ID of a note.
     * @param {string} [contact.notes.text] - The text of a note.
     * @param {Date} [contact.notes.created_at] - The creation date of a note.
     * @param {Date} [contact.notes.updated_at] - The last updated date of a note.
     * @param {object} [contact.notes.author] - The author of a note. TODO: Check this vs docs
     * @returns {object} - The created contact.
     */
    async createContact(contact) {
        let createdContact = {};
        await this.axios.post("/v2/contacts", contact).then((response) => {
            createdContact = response.data;
        }).catch((error) => {
            throw new Error(`V2.Contacts.createContact: ${error}\n${error.response.data}`);
        });
        return createdContact;
    }

    /**
     * @description This function is used to get a single contact from TidyHQ.
     * @param {string} [contactID="me"] - The ID of the contact to get (me / default returns the contact of the user who authorized the application)
     * @returns {object} - A contact object.
     **/
    async getContact(contactID = "me") {
        let contact = {};
        await this.axios.get(`/v2/contacts/${contactID}`).then((response) => {
            contact = response.data;
        }).catch((error) => {
            throw new Error(`V2.Contacts.getContact: ${error}\n${error.response.data}`);
        });
        return contact;
    }

    /**
     * @description Adds a note to a specified contact.
     * @param {string} contact_id - The ID of the contact to create the note for.
     * @param {string} note - The note to create.
     * @returns {boolean} - Success or failure.
     */
    async createContactNote(contact_id, note) {
        let success = false;
        await this.axios.post(`/v2/contacts/${contact_id}/notes`, {
            text: note
        }).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`V2.Contacts.createContactNote: ${error}\n${error.response.data}`);
        });
        return success;
    }

    /**
     * @description Deletes a specified note from a specified contact.
     * @param {string} contact_id - The ID of the contact to delete the note from.
     * @param {string} note_id - The ID of the note to delete.
     * @returns {boolean} - Success or failure.
     */
    async deleteContactNote(contact_id, note_id) {
        let success = false;
        await this.axios.delete(`/v2/contacts/${contact_id}/notes/${note_id}`).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`V2.Contacts.deleteContactNote: ${error}\n${error.response.data}`);
        });
        return success;
    }

    /**
     * @description This function is used to update a contact in TidyHQ.
     * @param {string} contact_id - The ID of the contact to update.
     * @param {object} contact - The new contact data.
     * @param {string} [contact.contact_id_number] - The contact ID number of the contact. Custom ID numbers must be enabled first in the organization settings.
     * @returns {object} - The updated contact.
     */
    async updateContact(contact_id, contact) {
        let updatedContact = {};
        await this.axios.patch(`/v2/contacts/${contact_id}`, contact).then((response) => {
            updatedContact = response.data;
        }).catch((error) => {
            console.log(error.response.data)
            throw new Error(`V2.Contacts.updateContact: ${error}\n${error.response.data}`);
        });
        return updatedContact;
    }

    /**
     * @description Gets all memberships for a given single contact.
     * @link https://tidyhq.readme.io/reference/get-contact-memberships
     * @param {string} contact_id - The ID of the contact to find memberships for.
     * @param {object} [options = {}] - The options to use.
     * @param {Date} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {Date} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of contacts per page to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @returns {object[]} - An array of contact objects.
     */
    async getContactMemberships(contact_id, options = {}) {
        let optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset"], options)
        let memberships = [];
        await this.axios.get(`/v2/contacts/${contact_id}/memberships${optionalParametersString}`).then((response) => {
            memberships = response.data;
        }).catch((error) => {
            throw new Error(`V2.Contacts.getContactMemberships: ${error}\n${error.response.data}`);
        });
        return memberships;
    }

}

module.exports = { ContactsAPI };