/**
 * @description This function is used to authorize the application with TidyHQ and return an access token.
 * @param {string} client_id - The client ID of the application.
 * @param {string} redirect_uri - The redirect URI of the application.
 * @param {string} [host="https://accounts.tidyhq.com"] - The host url of TidyHQ.
 * @returns {Promise<string>} - The access token.
 * @throws {TypeError} If `client_id` or `redirect_uri` are not strings.
 * @throws {RangeError} If `client_id` is not 64 characters long or `redirect_uri` is not a valid URL.
 * @throws {Error} For any Axios-related errors, including network issues or invalid responses.
 */
export function authorize(client_id: string, redirect_uri: string, host?: string | undefined): Promise<string>;
/**
 * @description This function is used to authorize using a username and password.
 * @param {string} client_id - The client ID of the application.
 * @param {string} client_secret - The client secret of the application.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @param {string} domain_prefix - The domain prefix of the club.
 * @returns {Promise<string>} - The access token.
 * @throws {TypeError} If `client_id`, `client_secret`, `username`, `password`, or `domain_prefix` are not strings.
 * @throws {RangeError} If `client_id` or `client_secret` are not 64 characters long.
 * @throws {Error} For any Axios-related errors, including network issues or invalid responses.
 */
export function authorizeWithPassword(client_id: string, client_secret: string, username: string, password: string, domain_prefix: string, host?: string): Promise<string>;
/**
 * @description This function is used to request an access token from TidyHQ.
 * @param {string} client_id - The client ID of the application.
 * @param {string} client_secret - The client secret of the application.
 * @param {string} redirect_uri - The redirect URI of the application.
 * @param {string} code - The code returned from the authorize function.
 * @returns {Promise<string>} - The access token.
 * @throws {TypeError} If `client_id`, `client_secret`, `redirect_uri`, or `code` are not strings.
 * @throws {RangeError} If `client_id` or `client_secret` are not 64 characters long or `redirect_uri` is not a valid URL.
 * @throws {Error} For any Axios-related errors, including network issues or invalid responses.
 */
export function requestAccessToken(client_id: string, client_secret: string, redirect_uri: string, code: string, host?: string): Promise<string>;
