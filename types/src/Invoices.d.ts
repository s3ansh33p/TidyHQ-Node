/**
 * @description This class is used to interact with Invoices in TidyHQ.
 * @class
 */
export class InvoicesAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of invoices from TidyHQ.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of invoices to return.
     * @param {number} [options.offset] - The number of invoices to skip.
     * @param {"activated" | "cancelled" | "all"} [options.status] - The status of the invoice.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Invoices>} - An array of invoices.
     */
    getInvoices(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        status?: "all" | "activated" | "cancelled" | undefined;
        updated_since?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Invoices>;
    /**
     * @description Get a single invoice from TidyHQ.
     * @param {string} invoiceID - The ID of the invoice to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Invoice>} - An invoice.
     **/
    getInvoice(invoiceID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Invoice>;
    /**
     * @description Create a new invoice.
     * @param {Tidy_V1_InvoiceParams} invoice - The invoice to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Invoice>} - The newly created invoice.
     */
    createInvoice(invoice: Tidy_V1_InvoiceParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Invoice>;
    /**
     * @description This function is used to add a payment to an invoice.
     * @param {string} invoiceID - The ID of the invoice.
     * @param {object} [options] - The options to create the payment with. At least one option is required that isn't the access_token.
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.amount] - The amount of the payment expressed as a decimal.
     * @param {Tidy_V1_PaymentType} [options.payment_type] - The type of payment.
     * @param {string} [options.date] - The date of the payment in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Payment>} - The newly created payment.
     */
    addPayment(invoiceID: string, options?: {
        access_token?: string | undefined;
        amount?: number | undefined;
        payment_type?: Tidy_V1_PaymentType | undefined;
        date?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Payment>;
    /**
     * @description Delete an invoice.
     * @param {string} invoiceID - The ID of the invoice.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteInvoice(invoiceID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
    #private;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_Invoices, TidyAPI_V1_Invoice, TidyAPI_V1_Payment, TidyAPI_Response, Tidy_V1_InvoiceParams, Tidy_V1_PaymentType } from "types.js";
