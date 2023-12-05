/**
 * @fileoverview This file contains functions for interacting with Tasks in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
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
     * @description This function is used to create a new instance of the TasksAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the TasksAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
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
        await this.axios.get(`/v1/${path}${optionalParametersString}`).then((response) => {
            tasks = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.getTasks: ${error}\n${error.response.data}`);
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
        await this.axios.get(`/v1/tasks/${task_id}`).then((response) => {
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
     * @param {date} due_date - The due date of the task in ISO 8601 format.
     * @param {string} description - The description of the task.
     * @returns {object} - The new task.
     */
    async createTask(contact_id, title, due_date, description = "") {
        let task = {};
        await this.axios.post(`/v1/tasks`, {
            contact_id,
            title,
            due_date,
            description
        }).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.createTask: ${error}\n${error.response.data}`);
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
        await this.axios.put(`/v1/tasks/${task_id}`, options).then((response) => {
            task = response.data;
        }).catch((error) => {
            throw new Error(`Tasks.updateTask: ${error}\n${error.response.data}`);
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
        await this.axios.delete(`/v1/tasks/${task_id}`).then(() => {
            success = true;
        }).catch((error) => {
            throw new Error(`Tasks.deleteTask: ${error}\n${error.response.data}`);
        });
        return success;
    }

}

module.exports = { TasksAPI };