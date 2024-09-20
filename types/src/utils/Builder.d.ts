/**
 * @fileoverview This file contains functions for building strings.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.0.0
 * @license GPL-3.0
 */
/**
 * @description This function is used to build a string of URL parameters.
 * @param {string[]} keys - The keys of the parameters.
 * @param {Record<string, any>} data - The data to be used to build the parameters.
 * @example makeURLParameters(["limit", "offset"], { limit: 10, offset: 0 });
 * @example makeURLParameters(["ids[]"], { ids: [123, 2] });
 * @example makeURLParameters(["filter[[]]"], { filter: [{ custom_field_id: "5f1c674336f2", custom_field_value: "1" }] });
 * @example makeURLParameters(["filter_equals[][]"], { filter_equals: { email_address: "test@test.com" } });
 * @returns {string} - The parameters.
 */
export function makeURLParameters(keys: string[], data: Record<string, any>): string;
