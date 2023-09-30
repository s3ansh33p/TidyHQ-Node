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
    constructor(accessToken) {
        this.accessToken = accessToken;

        this.Association = new AssociationAPI(accessToken);
        this.Categories = new CategoriesAPI(accessToken);
        this.Contacts = new ContactsAPI(accessToken);
        this.CustomFields = new CustomFieldsAPI(accessToken);
        this.Deposits = new DepositsAPI(accessToken);
        this.Emails = new EmailsAPI(accessToken);
        this.Events = new EventsAPI(accessToken);
        this.Expenses = new ExpensesAPI(accessToken);
        this.Groups = new GroupsAPI(accessToken);
        this.Invoices = new InvoicesAPI(accessToken);
        this.Meetings = new MeetingsAPI(accessToken);
        this.Memberships = new MembershipsAPI(accessToken);
        this.MembershipLevels = new MembershipLevelsAPI(accessToken);
        this.Organization = new OrganizationAPI(accessToken);
        this.Tasks = new TasksAPI(accessToken);
        this.Tickets = new TicketsAPI(accessToken);
        this.Transactions = new TransactionsAPI(accessToken);

        // v2
        this.V2 = new V2(accessToken);
    }

    /**
     * @description Global request function for the TidyHQ API.
     * @param {string} path
     * @param {string} accessToken 
     */
    async get(path, accessToken) {
        let url = `https://api.tidyhq.com/${path}?access_token=${accessToken}`;
        // return data and status
        let data = {};
        let status = 400;
        await axios.get(url).then((response) => {
            data = response.data;
            status = response.status;
        }).catch((error) => {
            data = error;
            status = error.response.status;
        });
        return {
            data: data,
            status: status
        };
    }

}

module.exports = TidyHQ;