/**
 * @description This class is used to interact with the Shop in TidyHQ.
 * @class
 */
export class ShopAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all shop products.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_ShopProducts>} - The list of products.
     */
    getProducts(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_ShopProducts>;
    /**
     * @description Get a single shop product.
     * @param {string} product_id - The ID of the product.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_ShopProduct>} - The product.
     */
    getProduct(product_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_ShopProduct>;
    /**
     * @description Get a list of all shipping options.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_ShippingOptions>} - The list of shipping options.
     */
    getShippingOptions(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_ShippingOptions>;
    /**
     * @description Get a single shipping option.
     * @param {string} shipping_option_id - The ID of the shipping option.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_ShippingOption>} - The shipping option.
     */
    getShippingOption(shipping_option_id: string, options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_ShippingOption>;
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
    getOrders(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
        created_since?: string | undefined;
        status?: "all" | "pending" | "completed" | "cancelled" | undefined;
    } | undefined): Promise<TidyAPI_V1_ShopOrders>;
    /**
     * @description Get a single order.
     * @param {string} order_id - The ID of the order.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_ShopOrder>} - The order.
     */
    getOrder(order_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_ShopOrder>;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_ShopProducts, TidyAPI_V1_ShopProduct, TidyAPI_V1_ShippingOptions, TidyAPI_V1_ShippingOption, TidyAPI_V1_ShopOrders, TidyAPI_V1_ShopOrder } from "types.js";
