/* ========== Axios ========== */

/**
 * @typedef {import('axios').AxiosInstance} AxiosInstance
 */

/* ========== V2_Contact ========== */

/**
 * @typedef {Object} Tidy_V2_ContactLink
 * @property {number} contact_id - Alphanumeric ID associated with the contact this link is towards.
 * @property {string} relationship_type - The type of relationship (e.g., "Adult", "Child").
 * @property {string} title - The title of the contact link.
 * @property {string|null} metadata - Optional arbitrary metadata attached to the object.
 * @property {string} created_at - Creation date and time of the contact link.
 * @property {string} updated_at - Last update date and time of the contact link.
 * @property {string} display_name - Humanized version of the type field, suitable for display.
 * @property {string} type - [!] TBA
 * @property {string} contact_id - Alphanumeric (V2) ID associated with the contact this link is towards.
 */

/**
 * @typedef {Object} Tidy_V2_ContactGroup
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
 * @typedef {Object} Tidy_V2_ContactOrganization
 * @property {string} id - Unique identifier for the organization.
 * @property {string} name - Name of the organization.
 * @property {string} domain_prefix - Domain prefix of the organization.
 * @property {string[]} permissions Permissions user has for the organization.
 */

/**
 * @typedef {Object} Tidy_V2_Contact
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
 * @property {Tidy_V2_ContactOrganization} organization - Organization associated with the contact.
 * @property {Tidy_V2_ContactGroup[]} groups - Groups associated with the contact.
 * @property {Tidy_V2_ContactLink[]} contact_links - Links associated with the contact.
 * @property {Tidy_V2_Note[]} notes - Notes associated with the contact.
 */

/* ========== V2_Memberships ========== */

/**
 * @typedef {Object} Tidy_V2_Membership
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
 * @property {Tidy_V2_Note[]} notes - The notes associated with the membership.
 */

/* ========== V2_Note ========== */

/**
 * @typedef {Object} Tidy_V2_Note
 * @property {string} id - The unique identifier for the note.
 * @property {string} text - The content of the note.
 * @property {string} created_at - The creation date and time of the note.
 * @property {string} updated_at - The last update date and time of the note.
 * @property {Object} author - The author of the note. [!]
 */

/* ========== V2_Organization ========== */

/**
 * @typedef {Object} Tidy_V2_Organization
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
 * @property {Tidy_V1_OrganizationPublicContact[]} public_contacts - The public contacts of the organization.
 * @property {Object} logo_url - The URL to the logo of the organization.
 * @property {string} created_at - The creation date and time of the organization.
 * @property {string} updated_at - The last update date and time of the organization.
 * @property {Object} plan - The plan of the organization.
 * @property {string} plan.name - The name of the plan of the organization.
 * @property {Tidy_V1_OrganizationPlanQuota} plan.quota - The quota of the plan for the organization.
 * @property {Tidy_V1_OrganizationLink[]} parent_organizations - The parent organizations of the organization.
 * @property {Tidy_V1_OrganizationLink[]} child_organizations - The child organizations of the organization.
 */

/**
 * @typedef {Object} Tidy_V2_OrganizationRole
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
 * @typedef {Object} Tidy_V1_Category
 * @property {number} id - The unique identifier for the category.
 * @property {string} name - The name of the category.
 * @property {string} description - The description of the category.
 * @property {Object.<string, number>} balance - The balance of the category in various currencies, with currency codes as keys and amounts as values. E.g., { "AUD": -20.0, "USD": 42.0 }.
 * @property {string} created_at - The creation date and time of the category in ISO 8601 format.
 */

/* ========== Contact ========== */

/**
 * @typedef {Object} Tidy_V1_ContactLink
 * @property {number} contact_id - The contact ID of the linked contact.
 * @property {string} relationship_type - The type of relationship (e.g., "Adult", "Child").
 */

/**
 * @typedef {Object} Tidy_V1_ContactGroup
 * @property {number} id - Unique identifier for the group.
 * @property {string} label - Label of the group.
 */

/**
 * @typedef {Object} Tidy_V1_ContactOrganization
 * @property {string} id - Unique identifier for the organization.
 * @property {string} name - Name of the organization.
 * @property {string} domain_prefix - Domain prefix of the organization.
 */

/**
 * @typedef {Object} Tidy_V1_Contact
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
 * @property {Tidy_V1_CustomField[]} custom_fields - Custom fields associated with the contact.
 * @property {Tidy_V1_ContactOrganization} organization - Organization associated with the contact.
 * @property {Tidy_V1_ContactGroup[]} groups - Groups associated with the contact.
 * @property {Tidy_V1_ContactLink[]} contact_links - Links associated with the contact.
 */

/* ========== Custom Field ========== */

/**
 * @typedef {"string"|"text"|"dropdown"|"boolean"|"date"} Tidy_V1_CustomFieldType
 */

/**
 * @typedef {Object} Tidy_V1_CustomField
 * @property {string} id - The unique identifier for the custom field.
 * @property {string} title - The title of the custom field.
 * @property {Tidy_V1_CustomFieldType} type - The type of the custom field.
 * @property {string} created_at - The creation date and time of the custom field.
 * @property {Tidy_V1_CustomFieldChoice[]} [choices] - Optional. The choices for the custom field, applicable if the type is "dropdown".
 */

/**
 * @typedef {Object} Tidy_V1_CustomFieldChoice
 * @property {string} id - The unique identifier for the custom field choice.
 * @property {string} title - The title of the custom field choice.
 * @property {string} created_at - The creation date and time of the custom field choice.
 */

/* ========== Finance ========== */

/**
 * @typedef {"cash"|"card"|"cheque"|"bank"|"other"} Tidy_V1_PaymentType
 */

/**
 * @typedef {"paid"|"cancelled"} Tidy_V1_PaymentStatus
 */

/**
 * @typedef {"activated"|"cancelled"} Tidy_V1_FinanceStatus
 */

/**
 * @typedef {Object} Tidy_V1_Payment
 * @property {string} id - The unique identifier for the payment.
 * @property {number} amount - The amount of the payment.
 * @property {Tidy_V1_PaymentType} type - The type of the payment.
 * @property {string} paid_at - The timestamp when the payment was made.
 * @property {Tidy_V1_PaymentStatus} status - The status of the payment.
 */

/* ========== Deposit ========== */

/**
 * @typedef {Object} Tidy_V1_Deposit
 * @property {string} id - The unique identifier for the deposit.
 * @property {string} ref_no - The reference number of the deposit.
 * @property {number} contact_id - The ID of the contact associated with the deposit.
 * @property {"deposit"} type - The type of the transaction.
 * @property {string} name - The name of the deposit.
 * @property {string|null} description - The description of the deposit.
 * @property {number} category_id - The category ID of the deposit.
 * @property {string} currency - The currency of the deposit amount.
 * @property {number} amount - The amount of the deposit.
 * @property {string|null} metadata - Additional metadata associated with the deposit.
 * @property {Tidy_V1_FinanceStatus} status - The status of the deposit.
 * @property {Tidy_V1_Payment[]} payments - The payments associated with the deposit.
 */

/* ========== Expense ========== */

/**
 * @typedef {Object} Tidy_V1_Expense
 * @property {string} id - The unique identifier for the expense.
 * @property {string} ref_no - The reference number of the expense.
 * @property {number} contact_id - The ID of the contact associated with the expense.
 * @property {"expense"} type - The type of the transaction.
 * @property {string} name - The name of the expense.
 * @property {string|null} description - The description of the expense.
 * @property {string} due_date - The due date of the expense.
 * @property {number} category_id - The category ID of the expense.
 * @property {number} amount - The total amount of the expense.
 * @property {number} amount_paid - The amount that has been paid towards the expense.
 * @property {number} amount_due - The amount that is still due.
 * @property {boolean} paid - Whether the expense has been fully paid or not.
 * @property {string|null} metadata - Additional metadata associated with the expense.
 * @property {Tidy_V1_FinanceStatus} status - The status of the expense.
 * @property {Tidy_V1_Payment[]} payments - The payments associated with the expense.
 */

/* ========== Invoice ========== */

/**
 * @typedef {Object} Tidy_V1_Invoice
 * @property {string} id - The unique identifier for the invoice.
 * @property {string} ref_no - The reference number of the invoice.
 * @property {number} contact_id - The ID of the contact associated with the invoice.
 * @property {"invoice"} type - The type of the transaction.
 * @property {string} name - The name of the invoice.
 * @property {string|null} description - The description of the invoice.
 * @property {string} due_date - The due date of the invoice.
 * @property {number} category_id - The category ID of the invoice.
 * @property {number} amount - The total amount of the invoice.
 * @property {number} amount_paid - The amount that has been paid towards the invoice.
 * @property {number} amount_due - The amount that is still due.
 * @property {boolean} paid - Whether the invoice has been fully paid or not.
 * @property {string|null} metadata - Additional metadata associated with the invoice.
 * @property {Tidy_V1_FinanceStatus} status - The status of the invoice.
 * @property {Tidy_V1_Payment[]} payments - The payments associated with the invoice.
 */

/* ========== Email ========== */

/**
 * @typedef {Object} Tidy_V1_Email
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

/* ========== Events ========== */

/**
 * @typedef {Object} Tidy_V1_Event
 * @property {number} id - The unique identifier for the event.
 * @property {string} name - The name of the event.
 * @property {string|null} location - The location of the event.
 * @property {string} start_at - The start time of the event.
 * @property {string} end_at - The end time of the event.
 * @property {string} body - The body text of the event, which may contain HTML.
 * @property {string} created_at - The creation timestamp of the event.
 * @property {number} category_id - The ID of the category this event belongs to.
 * @property {boolean} public - Whether the event is public.
 * @property {string} image_url - The URL of the event's image.
 * @property {string} public_url - The public URL of the event.
 * @property {boolean} archived - Whether the event has been archived.
 */

/* ========== Group ========== */

/**
 * @typedef {Object} Tidy_V1_Group
 * @property {number} id - The unique identifier for the group.
 * @property {string} label - The label or name of the group.
 * @property {string|null} description - The description of the group.
 * @property {string} created_at - The creation timestamp of the group.
 * @property {number} contacts_count - The number of contacts associated with the group.
 * @property {string} logo_image - The URL path to the group's logo image.
 */

/* ========== Meeting ========== */

/**
 * @typedef {Object} Tidy_V1_Meeting
 * @property {number} id - The unique identifier for the meeting.
 * @property {string} name - The name of the meeting.
 * @property {string} description - The HTML description of the meeting.
 * @property {string} date_at - The date and time of the meeting in local time format.
 * @property {string|null} location_full_address - The full address of the meeting location.
 * @property {Tidy_V1_MeetingTopic[]} topics - An array of topics discussed in the meeting.
 * @property {boolean} public - Whether the meeting is public.
 * @property {string} created_at - The creation timestamp of the meeting in local time format.
 * @property {Tidy_V1_MeetingScheduleTopic[]} schedule_meeting_topics - An array of scheduled meeting topics.
 * @property {number[]} attendees - An array of IDs representing the attendees of the meeting.
 * @property {number[]} apologies - An array of IDs representing the people who apologized for not attending the meeting.
 * @property {number[]} maybe - An array of IDs representing the people who might attend the meeting.
 * @property {number[]} minute_takers - An array of IDs representing the minute takers of the meeting.
 * @property {number[]} chairpersons - An array of IDs representing the chairpersons of the meeting.
 * @property {string} public_url - The public URL to access the meeting.
 */

/**
 * @typedef {"idea"|"info"|"todo"} Tidy_V1_MeetingTopicCategory
 */

/**
 * @typedef {Object} Tidy_V1_MeetingTopic
 * @property {number} id - The unique identifier for the topic.
 * @property {string} name - The name of the topic.
 * @property {Tidy_V1_MeetingTopicCategory} category - The category of the topic.
 * @property {number} schedule_meeting_id - The ID of the scheduled meeting this topic is associated with.
 * @property {number} position - The position of the topic in the meeting.
 * @property {number|null} duration - The duration of the topic in minutes.
 * @property {string} created_at - The creation timestamp of the topic.
 * @property {string} updated_at - The update timestamp of the topic.
 * @property {string} description - The HTML description of the topic.
 * @property {string|null} decision - The decision made regarding the topic.
 * @property {number|null} parent_id - The ID of the parent topic.
 * @property {string} code - A unique hex code identifying the topic.
 * @property {string|null} deleted_at - The deletion timestamp of the topic.
 * @property {number|null} member_id - The ID of the member associated with the topic.
 * @property {number} revision - The revision number of the topic.
 * @property {number} last_edited_by_id - The ID of the last member who edited the topic.
 */

/**
 * @typedef {Object} Tidy_V1_MeetingScheduleTopic
 * @property {number|null} member_id - The ID of the member associated with the scheduled meeting topic.
 * @property {Tidy_V1_MeetingTopicCategory} category - The category of the scheduled meeting topic.
 * @property {string} name - The name of the scheduled meeting topic.
 * @property {string} description - The HTML description of the scheduled meeting topic.
 * @property {string|null} decision - The decision made regarding the scheduled meeting topic.
 * @property {string} created_at - The creation timestamp of the scheduled meeting topic.
 * @property {Tidy_V1_Task|null} task - The task associated with the scheduled meeting topic.
 */

/* ========== Membership Level ========== */

/**
 * @typedef {Object} Tidy_V1_MembershipLevel
 * @property {number} id - The unique identifier for the membership level.
 * @property {string} name - The name of the membership level.
 * @property {string} description - The description of the membership level.
 * @property {number} duration - The duration of the membership level.
 * @property {string} unit_period - The unit of period for the duration (e.g., "month").
 * @property {boolean} fixed - Whether the membership level has a fixed start date.
 * @property {string|null} start_at - The start date of the membership level, if fixed.
 * @property {boolean} enabled - Whether the membership level is enabled.
 * @property {string|null} active_since - The date since the membership level has been active.
 * @property {string} amount - The amount associated with the membership level.
 * @property {boolean} bundle - Whether the membership level is part of a bundle.
 * @property {Tidy_V1_BundleAmount[]|null} bundle_amounts - The bundle amounts, applicable if the membership level is part of a bundle.
 * @property {boolean} deleted - Whether the membership level is marked as deleted.
 * @property {string} plan_type - The type of plan (e.g., "rolling").
 * @property {boolean} auto_renew - Whether the membership level auto-renews.
 * @property {string} created_at - The creation timestamp of the membership level.
 */

/**
 * @typedef {Object} Tidy_V1_BundleAmount
 * @property {string} amount - The amount for the bundle.
 * @property {boolean} subsequent - Whether this amount applies to subsequent members.
 * @property {string} type - The type of member this amount applies to (e.g., "adult", "child").
 */

/**
 * @typedef {Object} Tidy_V1_PricingVariation
 * @property {Tidy_V1_PricingVariationState[]} State - An array of state-specific pricing variations.
 */

/**
 * @typedef {Object} Tidy_V1_PricingVariationState
 * @property {string} name - The name of the state or group for this pricing variation.
 * @property {string} amount - The amount associated with this state or group.
 * @property {Tidy_V1_PricingVariationDestination} destination - The destination organization details for this pricing variation.
 * @property {Tidy_V1_PricingVariationAutofillGroup} autofill_group - The autofill group details associated with this pricing variation.
 * @property {Tidy_V1_PricingVariationClub[]} Club - An array of club-specific pricing variations within the state.
 */

/**
 * @typedef {Object} Tidy_V1_PricingVariationClub
 * @property {string} name - The name of the club for this pricing variation.
 * @property {string} amount - The amount associated with this club.
 * @property {Tidy_V1_PricingVariationDestination} destination - The destination organization details for this club's pricing variation.
 * @property {Tidy_V1_PricingVariationAutofillGroup} autofill_group - The autofill group details associated with this club's pricing variation.
 */

/**
 * @typedef {Object} Tidy_V1_PricingVariationDestination
 * @property {string} id - The unique identifier for the destination.
 * @property {string} type - The type of the destination (e.g., "Organisation").
 * @property {string} name - The name of the destination.
 */

/**
 * @typedef {Object} Tidy_V1_PricingVariationAutofillGroup
 * @property {number} id - The unique identifier for the autofill group.
 * @property {string} name - The name of the autofill group.
 */

/* ========== Membership ========== */

/**
 * @typedef {Object} Tidy_V1_Membership
 * @property {number} id - The unique identifier for the membership.
 * @property {string} start_date - The start date of the membership in ISO 8601 format.
 * @property {string} end_date - The end date of the membership in ISO 8601 format.
 * @property {number} contact_id - The unique identifier for the contact associated with the membership.
 * @property {number} membership_level_id - The unique identifier for the membership level.
 * @property {string} state - The state of the membership (e.g., "activated").
 * @property {number} membership_id_reference - A reference ID for the membership.
 * @property {string} membership_id - A unique string identifier for the membership.
 * @property {Tidy_V1_MembershipLevelSummary} membership_level - The membership level details.
 * @property {Tidy_V1_Subscription[]} subscriptions - An array of subscriptions associated with the membership.
 * @property {Tidy_V1_MembershipMember[]} adult_members - An array of adult members associated with the membership.
 * @property {Tidy_V1_MembershipMember[]} child_members - An array of child members associated with the membership.
 * @property {string} created_at - The creation timestamp of the membership in ISO 8601 format.
 */

/**
 * @typedef {Object} Tidy_V1_MembershipMember
 * @property {number} contact_id - The unique identifier for the contact.
 * @property {string} member_since - The date since the contact has been a member in ISO 8601 format.
 */

/**
 * @typedef {Object} Tidy_V1_MembershipLevelSummary
 * @property {number} id - The unique identifier for the membership level.
 * @property {string} name - The name of the membership level.
 * @property {string} plan_type - The type of plan (e.g., "rolling").
 * @property {boolean} auto_renew - Whether the membership level auto-renews.
 */

/**
 * @typedef {Object} Tidy_V1_Subscription
 * @property {number} id - The unique identifier for the subscription.
 * @property {string} start_date - The start date of the subscription.
 * @property {string} end_date - The end date of the subscription.
 * @property {string} status - The status of the subscription (e.g., "Active", "Expired"). [!] Add all possible values.
 * @property {Tidy_V1_Variation[]} variations - An array of variations associated with the subscription.
 */

/**
 * @typedef {Object} Tidy_V1_Variation
 * @property {string} question - The question related to the variation.
 * @property {string} answer - The answer to the question.
 * @property {string} price - The price associated with the variation.
 * @property {Tidy_V1_PricingVariationDestination} destination - The destination details for the variation.
 * @property {Tidy_V1_PricingVariationAutofillGroup} autofill_group - The autofill group details for the variation.
 */

/* ========== Organization ========== */

/**
 * @typedef {Object} Tidy_V1_OrganizationPublicContact
 * @property {string} name - The name of the contact.
 * @property {string} position - The position of the contact.
 * @property {string} email - The email address of the contact.
 * @property {string} phone_number - The phone number of the contact.
 */

/**
 * @typedef {Object} Tidy_V1_OrganizationPlanQuota
 * @property {Object} emails - The email quota.
 * @property {Object} emails.limit - The email limit.
 * @property {Object} emails.sent - The number of emails sent.
 * @property {Object} emails.count - The number of emails sent.
 * @property {Object} contacts - The contacts quota.
 * @property {Object} contacts.limit - The contacts limit.
 * @property {Object} contacts.count - The number of contacts.
 */

/**
 * @typedef {Object} Tidy_V1_OrganizationLink
 * @property {string} id - The unique identifier for the organization.
 * @property {string} name - The name of the organization.
 */

/**
 * @typedef {Object} Tidy_V1_Organization
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
 * @property {Tidy_V1_OrganizationPublicContact[]} public_contacts - The public contacts of the organization.
 * @property {Object} logo_url - The URL to the logo of the organization.
 * @property {Object} plan - The plan of the organization.
 * @property {string} plan.name - The name of the plan of the organization.
 * @property {Tidy_V1_OrganizationPlanQuota} plan.quota - The quota of the plan for the organization.
 * @property {Tidy_V1_OrganizationLink[]} parent_organizations - The parent organizations of the organization.
 * @property {Tidy_V1_OrganizationLink[]} child_organizations - The child organizations of the organization.
 */

/* ========== Task ========== */

/**
 * @typedef {Object} Tidy_V1_Task
 * @property {number} id - The unique identifier for the task.
 * @property {string} title - The title of the task.
 * @property {string|null} description - The description of the task.
 * @property {string} due_date - The due date of the task in ISO 8601 format.
 * @property {string} created_at - The creation timestamp of the task.
 * @property {Tidy_V1_TaskRecurrence|null} recurrence - The recurrence pattern of the task, if any.
 * @property {number|null} contact_id - The ID of the contact associated with the task, if any.
 */

/**
 * @typedef {Object} Tidy_V1_TaskRecurrence
 * @property {"daily"|"weekly"|"monthly"|"yearly"} type - The type of the recurrence
 * @property {number} every - The interval of the recurrence.
 * @property {string|null} end_date - The end date of the recurrence in ISO 8601 format, if any.
 * @property {string[]} week_day_numbers - An array of week day numbers (as strings) that the recurrence falls on (indexed 0 from Monday to 6 on Sunday)
 * @property {number|null} day_of_month - The day of the month the recurrence falls on.
 * @property {number|null} month - The month the recurrence falls on.
 */

/* ========== Response ========== */

/**
 * @typedef {Object} TidyAPI_Data
 * @property {string} message - The message.
 * @property {Object} [errors] - Optional for error responses. 
 */

/**
 * @typedef {Object} TidyAPI_Response
 * @property {TidyAPI_Data} data - The payload returned from the request or error information.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_EmptyResponse
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Contact
 * @property {Tidy_V1_Contact|TidyAPI_Data} data - The contact.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Contacts
 * @property {Tidy_V1_Contact[]|TidyAPI_Data} data - The contacts.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */


/**
 * @typedef {Object} TidyAPI_V1_Categories
 * @property {Tidy_V1_Category[]|TidyAPI_Data} data - The categories.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_CustomField
 * @property {Tidy_V1_CustomField|TidyAPI_Data} data - The custom field.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_CustomFields
 * @property {Tidy_V1_CustomField[]|TidyAPI_Data} data - The custom fields.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_CustomFieldChoice
 * @property {Tidy_V1_CustomFieldChoice|TidyAPI_Data} data - The custom field.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_CustomFieldChoices
 * @property {Tidy_V1_CustomFieldChoice[]|TidyAPI_Data} data - The custom fields.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Deposit
 * @property {Tidy_V1_Deposit|TidyAPI_Data} data - The deposit.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Deposits
 * @property {Tidy_V1_Deposit[]|TidyAPI_Data} data - The deposits.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Email
 * @property {Tidy_V1_Email|TidyAPI_Data} data - The email.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Emails
 * @property {Tidy_V1_Email[]|TidyAPI_Data} data - The emails.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Event
 * @property {Tidy_V1_Event|TidyAPI_Data} data - The event.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Events
 * @property {Tidy_V1_Event[]|TidyAPI_Data} data - The events.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Expense
 * @property {Tidy_V1_Expense|TidyAPI_Data} data - The expense.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Expenses
 * @property {Tidy_V1_Expense[]|TidyAPI_Data} data - The expenses.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Group
 * @property {Tidy_V1_Group|TidyAPI_Data} data - The group.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Groups
 * @property {Tidy_V1_Group[]|TidyAPI_Data} data - The groups.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Invoice
 * @property {Tidy_V1_Invoice|TidyAPI_Data} data - The invoice.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Invoices
 * @property {Tidy_V1_Invoice[]|TidyAPI_Data} data - The invoices.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Meeting
 * @property {Tidy_V1_Meeting|TidyAPI_Data} data - The meeting.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Meetings
 * @property {Tidy_V1_Meeting[]|TidyAPI_Data} data - The meetings.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_MembershipLevel
 * @property {Tidy_V1_MembershipLevel|TidyAPI_Data} data - The membership level.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_MembershipLevels
 * @property {Tidy_V1_MembershipLevel[]|TidyAPI_Data} data - The membership levels.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Membership
 * @property {Tidy_V1_Membership|TidyAPI_Data} data - The membership.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Memberships
 * @property {Tidy_V1_Membership[]|TidyAPI_Data} data - The memberships.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Organization
 * @property {Tidy_V1_Organization|TidyAPI_Data} data - The organization.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Organizations
 * @property {Tidy_V1_Organization[]|TidyAPI_Data} data - The organizations.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_OrganizationContacts
 * @property {Tidy_V1_OrganizationPublicContact[]|TidyAPI_Data} data - The organizations.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Payment
 * @property {Tidy_V1_Payment|TidyAPI_Data} data - The organizations.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_PricingVariation
 * @property {Tidy_V1_PricingVariation[]|TidyAPI_Data} data - The membership level pricing variations.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Task
 * @property {Tidy_V1_Task|TidyAPI_Data} data - The task.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V1_Tasks
 * @property {Tidy_V1_Task[]|TidyAPI_Data} data - The tasks.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V2_Contact
 * @property {Tidy_V2_Contact|TidyAPI_Data} data - The contact.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V2_Contacts
 * @property {Tidy_V2_Contact[]|TidyAPI_Data} data - The contacts.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V2_Membership
 * @property {Tidy_V2_Membership|TidyAPI_Data} data - The membership.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V2_Memberships
 * @property {Tidy_V2_Membership[]|TidyAPI_Data} data - The memberships.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V2_Note
 * @property {Tidy_V2_Note|TidyAPI_Data} data - The note.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V2_Organization
 * @property {Tidy_V2_Organization|TidyAPI_Data} data - The organization.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */

/**
 * @typedef {Object} TidyAPI_V2_OrganizationRoles
 * @property {Tidy_V2_OrganizationRole[]|TidyAPI_Data} data - The roles.
 * @property {number} status - The HTTP status code of the response.
 * @property {string} statusText - The status text (e.g., "OK", "Not Found") of the response.
 * @property {boolean} success - Indicates whether the request was successful.
 * @property {string} [message] - An optional error message, present only in error responses.
 */
