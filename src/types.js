/* ========== Axios ========== */

/**
 * @typedef {import('axios').AxiosInstance} AxiosInstance
 */

/* ========== V2_Contact ========== */

/**
 * @typedef {Object} V2_ContactLink
 * @property {number} contact_id - Alphanumeric ID associated with the contact this link is towards.
 * @property {string} relationship_type - The type of relationship (e.g., "Adult", "Child").
 * @property {string} title - The title of the contact link.
 * @property {Object} metadata - Optional arbitrary metadata attached to the object.
 * @property {Date} created_at - Creation date and time of the contact link.
 * @property {Date} updated_at - Last update date and time of the contact link.
 * @property {string} display_name - Humanized version of the type field, suitable for display.
 * @property {string} type - [!] TBA
 * @property {string} contact_id - Alphanumeric (V2) ID associated with the contact this link is towards.
 */

/**
 * @typedef {Object} V2_ContactGroup
 * @property {number} id - Alphanumeric ID associated with the group.
 * @property {string} label - Label of the group.
 * @property {string[]} group_id_reference - Reference to the group ID in V1 API.
 * @property {string} description - Description of the group.
 * @property {Date} created_at - Creation date and time of the group.
 * @property {Date} updated_at - Last update date and time of the group.
 * @property {number} size - Number of contacts within the group.
 * @property {string} image - URL to the image that represents the group.
 */

/**
 * @typedef {Object} V2_ContactOrganization
 * @property {string} id - Unique identifier for the organization.
 * @property {string} name - Name of the organization.
 * @property {string} domain_prefix - Domain prefix of the organization.
 * @property {string[]} permissions Permissions user has for the organization.
 */

/**
 * @typedef {Object} V2_Contact
 * @property {string} id - The unique alphanumeric identifier for the contact.
 * @property {number} contact_id_reference - Reference to the contact ID in V1 API.
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
 * @property {string} contact_id_number - Contact ID number.
 * @property {string|null} profile_image - URL to the profile image of the contact.
 * @property {string} status - Status of the contact (e.g., active).
 * @property {V2_ContactOrganization} organization - Organization associated with the contact.
 * @property {V2_ContactGroup[]} groups - Groups associated with the contact.
 * @property {V2_ContactLink[]} contact_links - Links associated with the contact.
 * @property {V2_Note[]} notes - Notes associated with the contact.
 */

/* ========== V2_Memberships ========== */

/**
 * @typedef {Object} V2_Membership
 * @property {string} id - The unique identifier for the membership.
 * @property {string} created_at - The creation date and time of the membership.
 * @property {string} updated_at - The last update date and time of the membership.
 * @property {string} state - The state of the membership.
 * @property {string} status - Human-readable version of the state.
 * @property {number} membership_id_reference - Reference to the membership ID in V1 API.
 * @property {boolean} auto_renew_on - Flag indicating if the membership is set to auto-renew.
 * @property {boolean} auto_renew - Flag indicating if the membership is set to auto-renew.
 * @property {string} membership_level_id - The ID of the membership level.
 * @property {string} contact_id - The ID of the contact associated with the membership.
 * @property {string[]} adult_members_contact_ids - The IDs of the adult members associated with the membership.
 * @property {string[]} child_members_contact_ids - The IDs of the child members associated with the membership.
 * @property {Date} start_date - The start date of the membership.
 * @property {Date} end_date - The end date of the membership.
 * @property {V2_Note[]} notes - The notes associated with the membership.
 */

/* ========== V2_Note ========== */

/**
 * @typedef {Object} V2_Note
 * @property {string} id - The unique identifier for the note.
 * @property {string} text - The content of the note.
 * @property {Date} created_at - The creation date and time of the note.
 * @property {Date} updated_at - The last update date and time of the note.
 * @property {Object} author - The author of the note. [!]
 */

/* ========== V2_Organization ========== */

/**
 * @typedef {Object} V2_OrganizationPublicContacts
 * @property {string} name - The name of the contact.
 * @property {string} position - The position of the contact.
 * @property {string} email - The email address of the contact.
 * @property {string} phone_number - The phone number of the contact.
 */

/**
 * @typedef {Object} V2_OrganizationPlanQuota
 * @property {Object} emails - The email quota.
 * @property {Object} emails.limit - The email limit.
 * @property {Object} emails.sent - The number of emails sent.
 * @property {Object} emails.count - The number of emails sent.
 * @property {Object} contacts - The contacts quota.
 * @property {Object} contacts.limit - The contacts limit.
 * @property {Object} contacts.count - The number of contacts.
 */

/**
 * @typedef {Object} V2_OrganizationLink
 * @property {string} id - The unique identifier for the organization.
 * @property {string} name - The name of the organization.
 */

/**
 * @typedef {Object} V2_Organization
 * @property {string} id - The unique identifier for the organization.
 * @property {string} name - The name of the organization.
 * @property {string} domain_prefix - The domain prefix of the organization.
 * @property {string} location - The location of the organization.
 * @property {string} address - The street address of the organization.
 * @property {string} city - The city of the organization.
 * @property {string} state - The state of the organization.
 * @property {string} postcode - The postcode of the organization.
 * @property {string} country - The country of the organization.
 * @property {string} phone - The phone number of the organization.
 * @property {string} website - The website URL of the organization.
 * @property {string} twitter - The Twitter handle of the organization.
 * @property {string} facebook - The Facebook profile URL of the organization.
 * @property {string} currency - The currency used by the organization.
 * @property {string} time_zone - The time zone of the organization.
 * @property {Array<V2_OrganizationPublicContacts>} public_contacts - The public contacts of the organization.
 * @property {Object} logo_url - The URL to the logo of the organization.
 * @property {Date} created_at - The creation date and time of the organization.
 * @property {Date} updated_at - The last update date and time of the organization.
 * @property {Object} plan - The plan of the organization.
 * @property {string} plan.name - The name of the plan of the organization.
 * @property {V2_OrganizationPlanQuota} plan.quota - The quota of the plan for the organization.
 * @property {Array<V2_OrganizationLink>} parent_organizations - The parent organizations of the organization.
 * @property {Array<V2_OrganizationLink>} child_organizations - The child organizations of the organization.
 */

/**
 * @typedef {Object} V2_OrganizationRoles
 * @property {string} id - The unique identifier for the role.
 * @property {string} name - The name of the role.
 * @property {string} email_address - The email address to contact the members of this role.
 * @property {string} responsibilities - The responsibilities of the role.
 * @property {string[]} contact_ids - The contact IDs associated with the role.
 * @property {Date} created_at - The creation date and time of the role.
 * @property {Date} updated_at - The last update date and time of the role.
 */

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

/* ========== Response ========== */

/**
 * @typedef {Object} ApiResponse
 * @property {Object} data - The payload returned from the request or error information.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiEmptyResponse
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2ContactResponse
 * @property {V2_Contact} data - The contact.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2ContactsResponse
 * @property {V2_Contact[]} data - The contacts.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2MembershipResponse
 * @property {V2_Membership} data - The membership.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2MembershipsResponse
 * @property {V2_Membership[]} data - The memberships.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2NoteResponse
 * @property {V2_Note} data - The note.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} V2OrganizationResponse
 * @property {V2_Organization} data - The organization.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} V2OrganizationRolesResponse
 * @property {V2_OrganizationRoles[]} data - The roles.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */
