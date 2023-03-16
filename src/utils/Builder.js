/**
 * @fileoverview This file contains functions for building strings.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

/**
 * @description This function is used to build a string of URL parameters.
 * @param {string[]} keys - The keys of the parameters.
 * @param {object} data - The data to be used to build the parameters.
 * @returns {string} - The parameters.
 */
function makeURLParameters(keys, data) {
    let parameters = "";
    for (let i = 0; i < keys.length; i++) {
        let arrayType = false;
        let arrayObjType = false;
        let key = keys[i];

        // check if ends with []
        if (key.endsWith("[]")) {
            // remove [] from key
            key = key.slice(0, -2);
            arrayType = true;
        }
        // check if ends with [[]]
        if (key.endsWith("[[]]")) {
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
            } else {
                parameters += `&${key}=${data[key]}`;
            }
        }
    }
    return parameters;
}

module.exports = { makeURLParameters };