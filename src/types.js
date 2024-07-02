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
 * @property {string} created_at - Creation date and time of the contact link.
 * @property {string} updated_at - Last update date and time of the contact link.
 * @property {string} display_name - Humanized version of the type field, suitable for display.
 * @property {string} type - [!] TBA
 * @property {string} contact_id - Alphanumeric (V2) ID associated with the contact this link is towards.
 */

/**
 * @typedef {Object} V2_ContactGroup
 * @property {number} id - Alphanumeric ID associated with the group.
 * @property {string} label - Label of the group.
 * @property {string} group_id_reference - Reference to the group ID in V1 API.
 * @property {string} description - Description of the group.
 * @property {string} created_at - Creation date and time of the group.
 * @property {string} updated_at - Last update date and time of the group.
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
 * @property {string} start_date - The start date of the membership.
 * @property {string} end_date - The end date of the membership.
 * @property {V2_Note[]} notes - The notes associated with the membership.
 */

/* ========== V2_Note ========== */

/**
 * @typedef {Object} V2_Note
 * @property {string} id - The unique identifier for the note.
 * @property {string} text - The content of the note.
 * @property {string} created_at - The creation date and time of the note.
 * @property {string} updated_at - The last update date and time of the note.
 * @property {Object} author - The author of the note. [!]
 */

/* ========== V2_Organization ========== */

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
 * @property {OrganizationPublicContact[]} public_contacts - The public contacts of the organization.
 * @property {Object} logo_url - The URL to the logo of the organization.
 * @property {string} created_at - The creation date and time of the organization.
 * @property {string} updated_at - The last update date and time of the organization.
 * @property {Object} plan - The plan of the organization.
 * @property {string} plan.name - The name of the plan of the organization.
 * @property {OrganizationPlanQuota} plan.quota - The quota of the plan for the organization.
 * @property {OrganizationLink[]} parent_organizations - The parent organizations of the organization.
 * @property {OrganizationLink[]} child_organizations - The child organizations of the organization.
 */

/**
 * @typedef {Object} V2_OrganizationRoles
 * @property {string} id - The unique identifier for the role.
 * @property {string} name - The name of the role.
 * @property {string} email_address - The email address to contact the members of this role.
 * @property {string} responsibilities - The responsibilities of the role.
 * @property {string[]} contact_ids - The contact IDs associated with the role.
 * @property {string} created_at - The creation date and time of the role.
 * @property {string} updated_at - The last update date and time of the role.
 */

/* ========== Categories ========== */

/**
 * @typedef {Object} Category
 * @property {number} id - The unique identifier for the category.
 * @property {string} name - The name of the category.
 * @property {string} description - The description of the category.
 * @property {Object.<string, number>} balance - The balance of the category in various currencies, with currency codes as keys and amounts as values. E.g., { "AUD": -20.0, "USD": 42.0 }.
 * @property {string} created_at - The creation date and time of the category in ISO 8601 format.
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
 * @property {CustomField[]} custom_fields - Custom fields associated with the contact.
 * @property {ContactOrganization} organization - Organization associated with the contact.
 * @property {ContactGroup[]} groups - Groups associated with the contact.
 * @property {ContactLink[]} contact_links - Links associated with the contact.
 */

/* ========== Custom Field ========== */

/**
 * @typedef {"string"|"text"|"dropdown"|"boolean"|"date"} CustomFieldType
 */

/**
 * @typedef {Object} CustomField
 * @property {string} id - The unique identifier for the custom field.
 * @property {string} title - The title of the custom field.
 * @property {CustomFieldType} type - The type of the custom field.
 * @property {string} created_at - The creation date and time of the custom field.
 * @property {CustomFieldChoice[]} [choices] - Optional. The choices for the custom field, applicable if the type is "dropdown".
 */

/**
 * @typedef {Object} CustomFieldChoice
 * @property {string} id - The unique identifier for the custom field choice.
 * @property {string} title - The title of the custom field choice.
 * @property {string} created_at - The creation date and time of the custom field choice.
 */

/* ========== Finance ========== */

/**
 * @typedef {"cash"|"card"|"cheque"|"bank"|"other"} PaymentType
 */

/**
 * @typedef {"paid"|"cancelled"} PaymentStatus
 */

/**
 * @typedef {"activated"|"cancelled"} FinanceStatus
 */

/* ========== Deposit ========== */

/**
 * @typedef {Object} Deposit
 * @property {string} id - The unique identifier for the deposit.
 * @property {string} ref_no - The reference number of the deposit.
 * @property {number} contact_id - The ID of the contact associated with the deposit.
 * @property {"deposit"} type - The type of the transaction.
 * @property {string} name - The name of the deposit.
 * @property {string|null} description - The description of the deposit.
 * @property {number} category_id - The category ID of the deposit.
 * @property {string} currency - The currency of the deposit amount.
 * @property {number} amount - The amount of the deposit.
 * @property {Object|null} metadata - Additional metadata associated with the deposit.
 * @property {FinanceStatus} status - The status of the deposit.
 * @property {DepositPayment[]} payments - The payments associated with the deposit.
 */

/**
 * @typedef {Object} DepositPayment
 * @property {string} id - The unique identifier for the payment.
 * @property {number} amount - The amount of the payment.
 * @property {PaymentType} type - The type of the payment.
 * @property {string} paid_at - The timestamp when the payment was made.
 * @property {PaymentStatus} status - The status of the payment.
 */

/* ========== Expense ========== */

/* ========== Invoice ========== */

/* ========== Email ========== */

/**
 * @typedef {Object} Email
 * @property {string} id - The unique identifier for the email.
 * @property {number} sender_id - The ID of the sender.
 * @property {number[]} recipient_ids - An array of IDs for the recipients.
 * @property {"inbound"|"outbound"} way - The direction of the email (inbound or outbound).
 * @property {"email"|"group_email"} type - The type of the email.
 * @property {string} subject - The subject of the email.
 * @property {string} body - The body text of the email.
 * @property {string|null} scheduled_at - The scheduled send time of the email, if any.
 * @property {boolean} read - Whether the email has been read.
 * @property {boolean} archived - Whether the email has been archived.
 * @property {boolean} deleted - Whether the email has been deleted.
 * @property {boolean} junk - Whether the email has been marked as junk.
 * @property {Object[]} attachments - An array of attachments associated with the email.
 * @property {string} created_at - The creation timestamp of the email.
 */

/* ========== Organization ========== */

/**
 * @typedef {Object} OrganizationPublicContact
 * @property {string} name - The name of the contact.
 * @property {string} position - The position of the contact.
 * @property {string} email - The email address of the contact.
 * @property {string} phone_number - The phone number of the contact.
 */

/**
 * @typedef {Object} OrganizationPlanQuota
 * @property {Object} emails - The email quota.
 * @property {Object} emails.limit - The email limit.
 * @property {Object} emails.sent - The number of emails sent.
 * @property {Object} emails.count - The number of emails sent.
 * @property {Object} contacts - The contacts quota.
 * @property {Object} contacts.limit - The contacts limit.
 * @property {Object} contacts.count - The number of contacts.
 */

/**
 * @typedef {Object} OrganizationLink
 * @property {string} id - The unique identifier for the organization.
 * @property {string} name - The name of the organization.
 */

/**
 * @typedef {Object} Organization
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
 * @property {OrganizationPublicContact[]} public_contacts - The public contacts of the organization.
 * @property {Object} logo_url - The URL to the logo of the organization.
 * @property {Object} plan - The plan of the organization.
 * @property {string} plan.name - The name of the plan of the organization.
 * @property {OrganizationPlanQuota} plan.quota - The quota of the plan for the organization.
 * @property {OrganizationLink[]} parent_organizations - The parent organizations of the organization.
 * @property {OrganizationLink[]} child_organizations - The child organizations of the organization.
 */

/* ========== Response ========== */

/**
 * @typedef {Object} ApiErrorData
 * @property {string} message - The error message.
 * @property {Object} [errors] - Optional. Additional error information.
 */

/**
 * @typedef {Object} ApiResponse
 * @property {Object|ApiErrorData} data - The payload returned from the request or error information.
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
 * @typedef {Object} ApiContactResponse
 * @property {Contact|ApiErrorData} data - The contact.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiContactsResponse
 * @property {Contact[]|ApiErrorData} data - The contacts.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */


/**
 * @typedef {Object} ApiCategoriesResponse
 * @property {Category[]|ApiErrorData} data - The categories.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiCustomFieldResponse
 * @property {CustomField|ApiErrorData} data - The custom field.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiCustomFieldsResponse
 * @property {CustomField[]|ApiErrorData} data - The custom fields.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiCustomFieldChoiceResponse
 * @property {CustomFieldChoice|ApiErrorData} data - The custom field.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiCustomFieldChoicesResponse
 * @property {CustomFieldChoice[]|ApiErrorData} data - The custom fields.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiDepositResponse
 * @property {Deposit|ApiErrorData} data - The deposit.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiDepositsResponse
 * @property {Deposit[]|ApiErrorData} data - The deposits.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiEmailResponse
 * @property {Email|ApiErrorData} data - The email.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiEmailsResponse
 * @property {Email[]|ApiErrorData} data - The emails.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiOrganizationResponse
 * @property {Organization|ApiErrorData} data - The organization.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiOrganizationsResponse
 * @property {Organization[]|ApiErrorData} data - The organizations.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiOrganizationContactsResponse
 * @property {OrganizationPublicContact[]|ApiErrorData} data - The organizations.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2ContactResponse
 * @property {V2_Contact|ApiErrorData} data - The contact.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2ContactsResponse
 * @property {V2_Contact[]|ApiErrorData} data - The contacts.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2MembershipResponse
 * @property {V2_Membership|ApiErrorData} data - The membership.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2MembershipsResponse
 * @property {V2_Membership[]|ApiErrorData} data - The memberships.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2NoteResponse
 * @property {V2_Note|ApiErrorData} data - The note.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2OrganizationResponse
 * @property {V2_Organization|ApiErrorData} data - The organization.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} ApiV2OrganizationRolesResponse
 * @property {V2_OrganizationRoles[]|ApiErrorData} data - The roles.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */
