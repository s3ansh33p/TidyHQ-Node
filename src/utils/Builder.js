/**
 * @fileoverview This file contains functions for building strings.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.0.0
 * @license GPL-3.0
 */

/**
 * @description This function is used to build a string of URL parameters.
 * @param {string[]} keys - The keys of the parameters.
 * @param {object} data - The data to be used to build the parameters.
 * @example makeURLParameters(["limit", "offset"], { limit: 10, offset: 0 });
 * @example makeURLParameters(["ids[]"], { ids: [123, 2] });
 * @example makeURLParameters(["filter[[]]"], { filter: [{ custom_field_id: "5f1c674336f2", custom_field_value: "1" }] });
 * @example makeURLParameters(["filter_equals[][]"], { filter_equals: { email_address: "test@test.com" } });
 * @returns {string} - The parameters.
 */
function makeURLParameters(keys, data) {
    let parameters = "";
    for (let i = 0; i < keys.length; i++) {
        let arrayType = false;
        let arrayObjType = false;
        let arrayObjTypeV2 = false;
        let key = keys[i];

        // check if ends with [][] (for V2 filters)
        if (key.endsWith("[][]")) {
            // remove [][] from key
            key = key.slice(0, -4);
            arrayObjTypeV2 = true;
        }
        // check if ends with []
        else if (key.endsWith("[]")) {
            // remove [] from key
            key = key.slice(0, -2);
            arrayType = true;
        }
        // check if ends with [[]]
        else if (key.endsWith("[[]]")) {
            // remove [[]] from key
            key = key.slice(0, -4);
            arrayObjType = true;
        }

        if (data[key] !== undefined) {
            if (arrayType) {
                // ids[]=123&ids[]=2
                for (let j = 0; j < data[key].length; j++) {
                    parameters += `&${key}[]=${data[key][j]}`;
                }
            } else if (arrayObjType) {
                // filter[]custom_field_id=5f1c674336f2&filter[]custom_field_value=1
                for (let j = 0; j < data[key].length; j++) {
                    for (let k in data[key][j]) {
                        parameters += `&${key}[]${k}=${data[key][j][k]}`;
                    }
                }
            } else if (arrayObjTypeV2) {
                // filter_equals[email_address]=test@test.com
                for (let k in data[key]) {
                    parameters += `&${key}[${k}]=${data[key][k]}`;
                }
            } else {
                parameters += `&${key}=${data[key]}`;
            }
        }
    }
    // set first character to ?
    if (parameters.length > 0) {
        parameters = "?" + parameters.slice(1);
    }
    return parameters;
}

module.exports = { makeURLParameters };