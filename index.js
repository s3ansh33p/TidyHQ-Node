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
const { EmailsAPI } = require("./src/Emails");
const { EventsAPI } = require("./src/Events");
const { GroupsAPI } = require("./src/Groups");
const { InvoicesAPI } = require("./src/Invoices");
const { MeetingsAPI } = require("./src/Meetings");
const { MembershipsAPI } = require("./src/Memberships");
const { MembershipLevelsAPI } = require("./src/MembershipLevels");
const { OrganizationAPI } = require("./src/Organization");
const { TasksAPI } = require("./src/Tasks");
const { TicketsAPI } = require("./src/Tickets");
const { TransactionsAPI } = require("./src/Transactions");

class TidyHQ {
    constructor(accessToken) {
        this.accessToken = accessToken;

        this.Association = new AssociationAPI(accessToken);
        this.Categories = new CategoriesAPI(accessToken);
        this.Contacts = new ContactsAPI(accessToken);
        this.CustomFields = new CustomFieldsAPI(accessToken);
        this.Emails = new EmailsAPI(accessToken);
        this.Events = new EventsAPI(accessToken);
        this.Groups = new GroupsAPI(accessToken);
        this.Invoices = new InvoicesAPI(accessToken);
        this.Meetings = new MeetingsAPI(accessToken);
        this.Memberships = new MembershipsAPI(accessToken);
        this.MembershipLevels = new MembershipLevelsAPI(accessToken);
        this.Organization = new OrganizationAPI(accessToken);
        this.Tasks = new TasksAPI(accessToken);
        this.Tickets = new TicketsAPI(accessToken);
        this.Transactions = new TransactionsAPI(accessToken);
    }

}

module.exports = TidyHQ;