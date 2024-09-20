/**
 * @description This class is used to interact with Tasks in TidyHQ.
 * @class
 */
export class TasksAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all tasks.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {Promise<TidyAPI_V1_Tasks>} - The list of tasks.
     */
    getTasks(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
        completed?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V1_Tasks>;
    /**
     * @description Get a list of all tasks for a contact.
     * @param {string} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.completed] - Return only completed tasks or not.
     * @returns {Promise<TidyAPI_V1_Tasks>} - The list of tasks.
     */
    getContactTasks(contact_id: string, options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
        completed?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V1_Tasks>;
    /**
     * @description Get a single task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Task>} - The task.
     */
    getTask(task_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Task>;
    /**
     * @description Create a new task.
     * @param {string} contact_id - The ID of the contact to assign the task to.
     * @param {string} title - The title of the task.
     * @param {string} due_date - The due date of the task in ISO 8601 format.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the task.
     * @returns {Promise<TidyAPI_V1_Task>} - The new task.
     */
    createTask(contact_id: string, title: string, due_date: string, options?: {
        access_token?: string | undefined;
        description?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Task>;
    /**
     * @description Update a task.
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
    updateTask(task_id: string, options?: {
        access_token?: string | undefined;
        contact_id?: string | undefined;
        title?: string | undefined;
        due_date?: string | undefined;
        description?: string | undefined;
        completed?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V1_Task>;
    /**
     * @description Delete a task.
     * @param {string} task_id - The ID of the task.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteTask(task_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
    #private;
}
import { Rest } from "./utils/Rest.js";
