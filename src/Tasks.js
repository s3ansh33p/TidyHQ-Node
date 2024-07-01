/**
 * @fileoverview This file contains functions for interacting with Tasks in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Tasks in TidyHQ.
 * @class
 */
class TasksAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {TasksAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all tasks.
     * @param {string} path - The path for the request.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {object} - The list of tasks.
     * @private
     */
    async #_getTasks(path, options) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "completed"], options)
        let tasks = [];
        await this.rest.get(`/v1/${path}${optionalParametersString}`, options.access_token).then((response) => {
            tasks = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.getTasks: ${error}\n${error.response.data}`);
        });
        return tasks;
    }

    /**
     * @description This function is used to get a list of all tasks.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {object} - The list of tasks.
     */
    async getTasks(options = {}) {
        return await this.#_getTasks("tasks", options);
    }

    /**
     * @description This function is used to get a list of all tasks for a contact.
     * @param {string} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {object} - The list of tasks.
     */
    async getContactTasks(contact_id, options = {}) {
        return await this.#_getTasks(`contacts/${contact_id}/tasks`, options);
    }

    /**
     * @description This function is used to get a single task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The task.
     */
    async getTask(task_id, options = {}) {
        let task = {};
        await this.rest.get(`/v1/tasks/${task_id}`, options.access_token).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.getTask: ${error}\n${error.response.data}`);
        });
        return task;
    }

    /**
     * @description This function is used to create a new task.
     * @param {string} contact_id - The ID of the contact to assign the task to.
     * @param {string} title - The title of the task.
     * @param {Date} due_date - The due date of the task in ISO 8601 format.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the task.
     * @returns {object} - The new task.
     */
    async createTask(contact_id, title, due_date, options = {}) {
        let task = {};
        await this.rest.post(`/v1/tasks`, {
            contact_id,
            title,
            due_date,
            description: options.description
        }, options.access_token).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.createTask: ${error}\n${error.response.data}`);
        });
        return task;
    }

    /**
     * @description This function is used to update a task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.contact_id] - The ID of the contact to assign the task to.
     * @param {string} [options.title] - The title of the task.
     * @param {Date} [options.due_date] - The due date of the task in ISO 8601 format.
     * @param {string} [options.description] - The description of the task.
     * @param {boolean} [options.completed] - Whether the task is completed or not.
     * @returns {object} - The updated task.
     */
    async updateTask(task_id, options) {
        const access_token = options.access_token;
        delete options.access_token;

        let task = {};
        await this.rest.put(`/v1/tasks/${task_id}`, options, access_token).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.updateTask: ${error}\n${error.response.data}`);
        });
        return task;
    }

    /**
     * @description This function is used to delete a task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Success or failure.
     */
    async deleteTask(task_id, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/tasks/${task_id}`, {}, options.access_token).then(() => {
            success = true;
        }).catch((error) => {
            throw new Error(`Tasks.deleteTask: ${error}\n${error.response.data}`);
        });
        return success;
    }

}

module.exports = { TasksAPI };