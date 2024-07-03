/**
 * @fileoverview This file contains the main class for the TidyHQ API.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const axios = require("axios").default;

const { AssociationAPI } = require("./src/Association");
const { CategoriesAPI } = require("./src/Categories");
const { ContactsAPI } = require("./src/Contacts");
const { CustomFieldsAPI } = require("./src/CustomFields");
const { DepositsAPI } = require("./src/Deposits");
const { EmailsAPI } = require("./src/Emails");
const { EventsAPI } = require("./src/Events");
const { ExpensesAPI } = require("./src/Expenses");
const { GroupsAPI } = require("./src/Groups");
const { InvoicesAPI } = require("./src/Invoices");
const { MeetingsAPI } = require("./src/Meetings");
const { MembershipsAPI } = require("./src/Memberships");
const { MembershipLevelsAPI } = require("./src/MembershipLevels");
const { OrganizationAPI } = require("./src/Organization");
const { TasksAPI } = require("./src/Tasks");
const { TicketsAPI } = require("./src/Tickets");
const { TransactionsAPI } = require("./src/Transactions");

const { V2 } = require("./src/v2/index");
const { Rest } = require("./src/utils/Rest");

/**
 * @description This class is used to interact with the TidyHQ API.
 * @link https://dev.tidyhq.com
 * @example
 * const TidyHQ = require('../TidyHQ-Node');
 * const thq = new TidyHQ(process.env.ACCESS_TOKEN);
 */
class TidyHQ {

    /**
     * @param {string} accessToken - The access token to use.
     * @constructor
     */
    constructor(accessToken, host = "https://api.tidyhq.com") {
        this.accessToken = accessToken;
        this.host = host;

        this.axios = axios.create({
            baseURL: this.host,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        this.Rest = new Rest(this.axios, this.accessToken);

        this.Association = new AssociationAPI(this.Rest);
        this.Categories = new CategoriesAPI(this.Rest);
        this.Contacts = new ContactsAPI(this.Rest);
        this.CustomFields = new CustomFieldsAPI(this.Rest);
        this.Deposits = new DepositsAPI(this.Rest);
        this.Emails = new EmailsAPI(this.Rest);
        this.Events = new EventsAPI(this.Rest);
        this.Expenses = new ExpensesAPI(this.Rest);
        this.Groups = new GroupsAPI(this.Rest);
        this.Invoices = new InvoicesAPI(this.Rest);
        this.Meetings = new MeetingsAPI(this.Rest);
        this.Memberships = new MembershipsAPI(this.Rest);
        this.MembershipLevels = new MembershipLevelsAPI(this.Rest);
        this.Organization = new OrganizationAPI(this.Rest);
        this.Tasks = new TasksAPI(this.Rest);
        this.Tickets = new TicketsAPI(this.Rest);
        this.Transactions = new TransactionsAPI(this.Rest);

        this.V2 = new V2(this.Rest);
    }

}

module.exports = TidyHQ;