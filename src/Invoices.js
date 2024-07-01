/**
 * @fileoverview This file contains functions for interacting with Invoices in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Invoices in TidyHQ.
 * @class
 */
class InvoicesAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {InvoicesAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of invoices from TidyHQ.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of invoices to return.
     * @param {number} [options.offset] - The number of invoices to skip.
     * @param {"activated" | "cancelled" | "all"} [options.status] - The status of the invoice.
     * @param {Date} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {object} - An array of invoices.
     */
    async getInvoices(options = {}) {
        let invoices = [];
        if (options.status == "all") {
            options.status = "activated,cancelled";
        }
        let optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], options);

        await this.rest.get(`/v1/invoices${optionalParametersString}`, options.access_token).then((response) => {
            invoices = response.data;
        }).catch((error) => {
            throw new Error(`Invoices.getInvoices: ${error}\n${error.response.data}`);
        });
        return invoices;
    }

    /**
     * @description This function is used to get a single invoice from TidyHQ.
     * @param {string} invoiceID - The ID of the invoice to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - An Invoice object.
     **/
    async getInvoice(invoiceID, options = {}) {
        let invoice = {};

        await this.rest.get(`/v1/invoices/${invoiceID}`, options.access_token).then((response) => {
            invoice = response.data;
        }).catch((error) => {
            throw new Error(`Invoices.getInvoice: ${error}\n${error.response.data}`);
        });
        return invoice;
    }

    /**
     * @description This function is used to create a new invoice.
     * @param {string} reference - The reference of the invoice. e.g. 'Invoice #1234'
     * @param {decimal} amount - The amount of the invoice.
     * @param {decimal} included_tax_total - The total amount of tax.
     * @param {decimal} pre_tax_amount - The total amount before tax.
     * @param {Date} due_date - The due date of the invoice in ISO 8601 format.
     * @param {integer} category_id - The ID of the category to assign the invoice to. 
     * @param {integer} contact_id - The ID of the contact to assign the invoice to.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the invoice.
     * @param {string} [options.metadata] - The metadata of the invoice.
     * @returns {boolean} - Success or failure.
     */
     async createInvoice(reference, amount, included_tax_total, pre_tax_amount, due_date, category_id, contact_id, options = {}) {
        const access_token = options.access_token;
        delete options.access_token;
        
        let success = false;
        
        const validOptions = ["description", "metadata"];
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            if (!validOptions.includes(keys[i])) {
                throw new Error(`Invoices.createInvoice: Invalid option '${keys[i]}'`);
            }
        }
        
        await this.rest.post(`/v1/invoices`, {
            reference,
            amount,
            included_tax_total,
            pre_tax_amount,
            due_date,
            category_id,
            contact_id,
            ...options
        }, access_token).then((response) => {
            if (response.status == 201) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Invoices.createInvoice: ${error}\n${error.response.data}`);
        });
        return success;
    }

    /**
     * @description This function is used to add a payment to an invoice.
     * @param {string} invoiceID - The ID of the invoice.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use. - The options to create the payment with.
     * @param {decimal} [options.amount] - The amount of the payment expressed as a decimal.
     * @param {"cash" | "card" | "cheque" | "bank" | "other"} [options.payment_type] - The type of payment.
     * @param {Date} [options.date] - The date of the payment in ISO 8601 format.
     * @returns {boolean} - Success or failure.
     */
    async addPayment(invoiceID, options) {
        let success = "";
        if (options.payment_type != undefined) {
            if (!["cash", "card", "cheque", "bank", "other"].includes(options.payment_type)) throw new Error(`Invoices.addPayment: Invalid payment type ${options.payment_type}.`);
        }
        let optionalParametersString = makeURLParameters(["amount", "payment_type", "date"], options);
        if (optionalParametersString == "") throw new Error("Invoices.addPayment: No valid options provided.");

        await this.rest.post(`/v1/invoices/${invoiceID}/payments${optionalParametersString}`, {}, options.access_token).then((response) => {
            if (response.status == 201) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Invoices.addPayment: ${error}\n${error.response.data}`);
        });
        return success;
    }

    // delete an invoice
    /**
     * @description This function is used to delete an invoice.
     * @param {string} invoiceID - The ID of the invoice.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Success or failure.
     */
    async deleteInvoice(invoiceID, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/invoices/${invoiceID}`, {}, options.access_token).then((response) => {
            if (response.status == 200) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Invoices.deleteInvoice: ${error}\n${error.response.data}`);
        });
        return success;
    }
        
}

module.exports = { InvoicesAPI };