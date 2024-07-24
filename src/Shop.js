/**
 * @fileoverview This file contains functions for interacting with the Shop in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with the Shop in TidyHQ.
 * @class
 */
class ShopAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of all shop products.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_ShopProducts>} - The list of products.
     */
    async getProducts(options = {}) {
        const optionalParametersString = makeURLParameters(["limit", "offset"], options)
        return await this.rest.get(`/v1/shop/products${optionalParametersString}`, options?.access_token);
    }
    
    /**
     * @description Get a single shop product.
     * @param {string} product_id - The ID of the product.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_ShopProduct>} - The product.
     */
    async getProduct(product_id, options = {}) {
        return await this.rest.get(`/v1/shop/products/${product_id}`, options?.access_token);
    }

    /**
     * @description Get a list of all shipping options.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_ShippingOptions>} - The list of shipping options.
     */
    async getShippingOptions(options = {}) {
        const optionalParametersString = makeURLParameters(["limit", "offset"], options)
        return await this.rest.get(`/v1/shop/shipping_options${optionalParametersString}`, options?.access_token);
    }

    /**
     * @description Get a single shipping option.
     * @param {string} shipping_option_id - The ID of the shipping option.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_ShippingOption>} - The shipping option.
     */
    async getShippingOption(shipping_option_id, options = {}) {
        return await this.rest.get(`/v1/shop/shipping_options/${shipping_option_id}`, options?.access_token);
    }

    /**
     * @description Get a list of all orders.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {string} [options.created_since] - The timestamp to begin from in ISO 8601 format.
     * @param {"all"|"pending"|"completed"|"cancelled"} [options.status] - The status of the orders to return.
     * @returns {Promise<TidyAPI_V1_ShopOrders>} - The list of orders.
     */
    async getOrders(options = {}) {
        const optionalParametersString = makeURLParameters(["limit", "offset", "created_since", "status"], options)
        return await this.rest.get(`/v1/shop/orders${optionalParametersString}`, options?.access_token);
    }
    
    /**
     * @description Get a single order.
     * @param {string} order_id - The ID of the order.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_ShopOrder>} - The order.
     */
    async getOrder(order_id, options = {}) {
        return await this.rest.get(`/v1/shop/orders/${order_id}`, options?.access_token);
    }

}

module.exports = { ShopAPI };