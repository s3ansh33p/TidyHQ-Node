/* ========== Contact ========== */

/**
 * @typedef {Object} ContactLink
 * @property {number} contact_id - The contact ID of the linked contact.
 * @property {string} relationship_type - The type of relationship (e.g., "Adult", "Child").
 */

/**
 * @typedef {Object} ContactGroup
 * @property {number} id - Unique identifier for the group.
 * @property {string} label - Label of the group.
 */

/**
 * @typedef {Object} ContactOrganization
 * @property {string} id - Unique identifier for the organization.
 * @property {string} name - Name of the organization.
 * @property {string} domain_prefix - Domain prefix of the organization.
 */

/**
 * @typedef {Object} Contact
 * @property {number} id - Unique identifier for the contact.
 * @property {string} first_name - First name of the contact.
 * @property {string} last_name - Last name of the contact.
 * @property {string} nick_name - Nickname of the contact.
 * @property {string} company - Company name associated with the contact.
 * @property {string} email_address - Email address of the contact.
 * @property {string} phone_number - Phone number of the contact.
 * @property {string} address1 - Street address of the contact.
 * @property {string} city - City of the contact.
 * @property {string|null} state - State of the contact.
 * @property {string} country - Country of the contact.
 * @property {string} postcode - Postcode of the contact.
 * @property {string} gender - Gender of the contact.
 * @property {string|null} birthday - Birthday of the contact.
 * @property {string} facebook - Facebook profile URL of the contact.
 * @property {string} twitter - Twitter handle of the contact.
 * @property {string} linkedin - LinkedIn profile URL of the contact.
 * @property {string} instagram - Instagram handle of the contact.
 * @property {string|null} website - Website URL of the contact.
 * @property {string|null} details - Additional details about the contact.
 * @property {boolean} subscribed - Subscription status of the contact.
 * @property {string|null} metadata - Metadata associated with the contact.
 * @property {string} created_at - Creation date and time of the contact record.
 * @property {string} updated_at - Last update date and time of the contact record.
 * @property {string|null} emergency_contact_person - Emergency contact person for the contact.
 * @property {string|null} emergency_contact_number - Emergency contact number for the contact.
 * @property {string} member_since - Date since the contact is a member.
 * @property {boolean} is_company - Flag indicating if the contact is a company.
 * @property {string} kind - Type of the contact (e.g., person).
 * @property {string} display_name - Display name of the contact.
 * @property {number} contact_id - Secondary identifier for the contact.
 * @property {string} contact_id_number - Contact ID number.
 * @property {string|null} profile_image - URL to the profile image of the contact.
 * @property {string} status - Status of the contact (e.g., active).
 * @property {Array<CustomField>} custom_fields - Custom fields associated with the contact.
 * @property {ContactOrganization} organization - Organization associated with the contact.
 * @property {Array<ContactGroup>} groups - Groups associated with the contact.
 * @property {Array<ContactLink>} contact_links - Links associated with the contact.
 */

/* ========== Custom Field ========== */

/**
 * @typedef {Object} CustomField
 * @property {string} id - The unique identifier for the custom field.
 * @property {string} title - The title of the custom field.
 * @property {string} type - The type of the custom field (e.g., "boolean").
 * @property {string} created_at - The creation date and time of the custom field.
 */
