/**
 * @fileoverview This file contains functions for interacting with Tasks in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Tasks in TidyHQ.
 * @class
 */
class TasksAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all tasks.
     * @param {string} path - The path for the request.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {Promise<TidyAPI_V1_Tasks>} - The list of tasks.
     */
    async #_getTasks(path, options) {
        const optionalParametersString = makeURLParameters(["limit", "offset", "completed"], options)
        return await this.rest.get(`/v1/${path}${optionalParametersString}`, options?.access_token);
    }

    /**
     * @description This function is used to get a list of all tasks.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {Promise<TidyAPI_V1_Tasks>} - The list of tasks.
     */
    async getTasks(options = {}) {
        return await this.#_getTasks("tasks", options);
    }

    /**
     * @description This function is used to get a list of all tasks for a contact.
     * @param {string} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {Promise<TidyAPI_V1_Tasks>} - The list of tasks.
     */
    async getContactTasks(contact_id, options = {}) {
        return await this.#_getTasks(`contacts/${contact_id}/tasks`, options);
    }

    /**
     * @description This function is used to get a single task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Task>} - The task.
     */
    async getTask(task_id, options = {}) {
        return await this.rest.get(`/v1/tasks/${task_id}`, options?.access_token);
    }

    /**
     * @description This function is used to create a new task.
     * @param {string} contact_id - The ID of the contact to assign the task to.
     * @param {string} title - The title of the task.
     * @param {string} due_date - The due date of the task in ISO 8601 format.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the task.
     * @returns {Promise<TidyAPI_V1_Task>} - The new task.
     */
    async createTask(contact_id, title, due_date, options = {}) {
        return await this.rest.post(`/v1/tasks`, {
            contact_id,
            title,
            due_date,
            description: options.description
        }, options?.access_token);
    }

    /**
     * @description This function is used to update a task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.contact_id] - The ID of the contact to assign the task to.
     * @param {string} [options.title] - The title of the task.
     * @param {string} [options.due_date] - The due date of the task in ISO 8601 format.
     * @param {string} [options.description] - The description of the task.
     * @param {boolean} [options.completed] - Whether the task is completed or not.
     * @returns {Promise<TidyAPI_V1_Task>} - The updated task.
     */
    async updateTask(task_id, options) {
        const access_token = options?.access_token || null;
        delete options.access_token;

        return await this.rest.put(`/v1/tasks/${task_id}`, options, access_token);
    }

    /**
     * @description This function is used to delete a task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    async deleteTask(task_id, options = {}) {
        return await this.rest.delete(`/v1/tasks/${task_id}`, {}, options?.access_token);
    }

}

module.exports = { TasksAPI };