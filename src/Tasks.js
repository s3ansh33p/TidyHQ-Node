/**
 * @fileoverview This file contains functions for interacting with Tasks in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Tasks in TidyHQ.
 * @class
 */
class TasksAPI {

    /**
     * @description This function is used to create a new instance of the TasksAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the TasksAPI class.
     * @constructor
     */
    constructor(access_token, host) {
        this.access_token = access_token;
        this.host = host;
    }

    /**
     * @description This function is used to get a list of all tasks.
     * @param {string} path - The path for the request.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @param {boolean} options.completed - Return only completed tasks or not.
     * @returns {object} - The list of tasks.
     * @private
     */
    async #_getTasks(path, options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "completed"], options)
        let tasks = [];
        await axios.get(`https://${this.host}/v1/${path}?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            tasks = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.getTasks: ${error}`);
        });
        return tasks;
    }

    /**
     * @description This function is used to get a list of all tasks.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @param {boolean} options.completed - Return only completed tasks or not.
     * @returns {object} - The list of tasks.
     */
    async getTasks(options = {}) {
        return await this.#_getTasks("tasks", options);
    }

    /**
     * @description This function is used to get a list of all tasks for a contact.
     * @param {string} contact_id - The ID of the contact.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @param {boolean} options.completed - Return only completed tasks or not.
     * @returns {object} - The list of tasks.
     */
    async getContactTasks(contact_id, options = {}) {
        return await this.#_getTasks(`contacts/${contact_id}/tasks`, options);
    }

    /**
     * @description This function is used to get a single task.
     * @param {string} task_id - The ID of the task.
     * @returns {object} - The task.
     */
    async getTask(task_id) {
        let task = {};
        await axios.get(`https://${this.host}/v1/tasks/${task_id}?access_token=${this.access_token}`).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.getTask: ${error}`);
        });
        return task;
    }

    /**
     * @description This function is used to create a new task.
     * @param {string} contact_id - The ID of the contact to assign the task to.
     * @param {string} title - The title of the task.
     * @param {date} due_date - The due date of the task in ISO 8601 format.
     * @param {string} description - The description of the task.
     * @returns {object} - The new task.
     */
    async createTask(contact_id, title, due_date, description = "") {
        let task = {};
        await axios.post(`https://${this.host}/v1/tasks?access_token=${this.access_token}`, {
            contact_id,
            title,
            due_date,
            description
        }).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.createTask: ${error}`);
        });
        return task;
    }

    /**
     * @description This function is used to update a task.
     * @param {string} task_id - The ID of the task.
     * @param {object} options - The options for the request.
     * @param {string} options.contact_id - The ID of the contact to assign the task to.
     * @param {string} options.title - The title of the task.
     * @param {date} options.due_date - The due date of the task in ISO 8601 format.
     * @param {string} options.description - The description of the task.
     * @param {boolean} options.completed - Whether the task is completed or not.
     * @returns {object} - The updated task.
     */
    async updateTask(task_id, options = {}) {
        let task = {};
        await axios.put(`https://${this.host}/v1/tasks/${task_id}?access_token=${this.access_token}`, options).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.updateTask: ${error}`);
        });
        return task;
    }

    /**
     * @description This function is used to delete a task.
     * @param {string} task_id - The ID of the task.
     * @returns {boolean} - Success or failure.
     */
    async deleteTask(task_id) {
        let success = false;
        await axios.delete(`https://${this.host}/v1/tasks/${task_id}?access_token=${this.access_token}`).then(() => {
            success = true;
        }).catch((error) => {
            throw new Error(`Tasks.deleteTask: ${error}`);
        });
        return success;
    }

}

module.exports = { TasksAPI };