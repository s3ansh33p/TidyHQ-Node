export = TidyHQ;
/**
 * @description This class is used to interact with the TidyHQ API.
 * @link https://dev.tidyhq.com
 * @example
 * const TidyHQ = require('../TidyHQ-Node');
 * const thq = new TidyHQ(process.env.ACCESS_TOKEN);
 */
declare class TidyHQ {
    /**
     * @param {string} accessToken - The access token to use.
     * @constructor
     */
    constructor(accessToken: string, host?: string);
    accessToken: string;
    host: string;
    axios: import("axios").AxiosInstance;
    Rest: Rest;
    Association: AssociationAPI;
    Categories: CategoriesAPI;
    Contacts: ContactsAPI;
    CustomFields: CustomFieldsAPI;
    Deposits: DepositsAPI;
    Emails: EmailsAPI;
    Events: EventsAPI;
    Expenses: ExpensesAPI;
    Groups: GroupsAPI;
    Invoices: InvoicesAPI;
    Meetings: MeetingsAPI;
    Memberships: MembershipsAPI;
    MembershipLevels: MembershipLevelsAPI;
    Organization: OrganizationAPI;
    Tasks: TasksAPI;
    Tickets: TicketsAPI;
    Transactions: TransactionsAPI;
    V2: V2;
}
import { Rest } from "./src/utils/Rest";
import { AssociationAPI } from "./src/Association";
import { CategoriesAPI } from "./src/Categories";
import { ContactsAPI } from "./src/Contacts";
import { CustomFieldsAPI } from "./src/CustomFields";
import { DepositsAPI } from "./src/Deposits";
import { EmailsAPI } from "./src/Emails";
import { EventsAPI } from "./src/Events";
import { ExpensesAPI } from "./src/Expenses";
import { GroupsAPI } from "./src/Groups";
import { InvoicesAPI } from "./src/Invoices";
import { MeetingsAPI } from "./src/Meetings";
import { MembershipsAPI } from "./src/Memberships";
import { MembershipLevelsAPI } from "./src/MembershipLevels";
import { OrganizationAPI } from "./src/Organization";
import { TasksAPI } from "./src/Tasks";
import { TicketsAPI } from "./src/Tickets";
import { TransactionsAPI } from "./src/Transactions";
import { V2 } from "./src/v2/index";
