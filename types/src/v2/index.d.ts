/**
 * @description This class is used to interact with the TidyHQ V2 API.
 * @link https://tidyhq.readme.io/reference
 */
export class V2 {
    /**
     * @param {Rest} Rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(Rest: Rest);
    Rest: Rest;
    Contacts: V2_ContactsAPI;
    Memberships: V2_MembershipAPI;
    MembershipLevels: V2_MembershipLevelsAPI;
    Organization: V2_OrganizationAPI;
    Webhooks: V2_WebhooksAPI;
}
import { Rest } from "../utils/Rest.js";
import { V2_ContactsAPI } from "./Contacts.js";
import { V2_MembershipAPI } from "./Memberships.js";
import { V2_MembershipLevelsAPI } from "./MembershipLevels.js";
import { V2_OrganizationAPI } from "./Organization.js";
import { V2_WebhooksAPI } from "./Webhooks";
