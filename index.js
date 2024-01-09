/**
 * @fileoverview This file contains the main class for the TidyHQ API.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.1.0
 * @license GPL-3.0
 */

const axios = require("axios");

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

/**
 * @description This class is used to interact with the TidyHQ API.
 * @link https://dev.tidyhq.com
 * @example
 * const TidyHQ = require('../TidyHQ-Node');
 * const thq = new TidyHQ(process.env.ACCESS_TOKEN);
 */
class TidyHQ {
    constructor(accessToken, host = "https://api.tidyhq.com") {
        this.accessToken = accessToken;
        this.host = host;

        this.axios = axios.create({
            baseURL: this.host,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        this.Association = new AssociationAPI(this.axios);
        this.Categories = new CategoriesAPI(this.axios);
        this.Contacts = new ContactsAPI(this.axios);
        this.CustomFields = new CustomFieldsAPI(this.axios);
        this.Deposits = new DepositsAPI(this.axios);
        this.Emails = new EmailsAPI(this.axios);
        this.Events = new EventsAPI(this.axios);
        this.Expenses = new ExpensesAPI(this.axios);
        this.Groups = new GroupsAPI(this.axios);
        this.Invoices = new InvoicesAPI(this.axios);
        this.Meetings = new MeetingsAPI(this.axios);
        this.Memberships = new MembershipsAPI(this.axios);
        this.MembershipLevels = new MembershipLevelsAPI(this.axios);
        this.Organization = new OrganizationAPI(this.axios);
        this.Tasks = new TasksAPI(this.axios);
        this.Tickets = new TicketsAPI(this.axios);
        this.Transactions = new TransactionsAPI(this.axios);

        this.V2 = new V2(this.axios);
    }

    /**
     * @description Global request function for the TidyHQ API.
     * @param {string} path
     * @param {string} query
     */
    async get(path, query = "") {
        let url = this.host + "/" + path + query;
        let data = {};
        let status = 400;
        await axios.get(url).then((response) => {
            data = response.data;
            status = response.status;
        }).catch((error) => {
            data = error.response.data;
            status = error.response.status;
        });
        return {
            data: data,
            status: status
        };
    }

}

module.exports = TidyHQ;