/**
 * @fileoverview This file contains the main class for the TidyHQ API.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

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

const axios = require("axios");

// v2
const { V2 } = require("./src/v2/index");

class TidyHQ {
    constructor(accessToken, host = "api.tidyhq.com") {
        this.accessToken = accessToken;

        this.Association = new AssociationAPI(accessToken, host);
        this.Categories = new CategoriesAPI(accessToken, host);
        this.Contacts = new ContactsAPI(accessToken, host);
        this.CustomFields = new CustomFieldsAPI(accessToken, host);
        this.Deposits = new DepositsAPI(accessToken, host);
        this.Emails = new EmailsAPI(accessToken, host);
        this.Events = new EventsAPI(accessToken, host);
        this.Expenses = new ExpensesAPI(accessToken, host);
        this.Groups = new GroupsAPI(accessToken, host);
        this.Invoices = new InvoicesAPI(accessToken, host);
        this.Meetings = new MeetingsAPI(accessToken, host);
        this.Memberships = new MembershipsAPI(accessToken, host);
        this.MembershipLevels = new MembershipLevelsAPI(accessToken, host);
        this.Organization = new OrganizationAPI(accessToken, host);
        this.Tasks = new TasksAPI(accessToken, host);
        this.Tickets = new TicketsAPI(accessToken, host);
        this.Transactions = new TransactionsAPI(accessToken, host);

        // v2
        this.V2 = new V2(accessToken, host);
    }

    /**
     * @description Global request function for the TidyHQ API.
     * @param {string} path
     * @param {string} accessToken 
     * @param {string} query
     */
    async get(path, accessToken, query="") {
        let url = `https://${this.host}/${path}?access_token=${accessToken}${query}`;
        // return data and status
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