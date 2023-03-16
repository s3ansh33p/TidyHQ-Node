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
        let key = keys[i];
        if (data[key] !== undefined) {
            parameters += `&${key}=${data[key]}`;
        }
    }
    return parameters;
}

module.exports = { makeURLParameters };