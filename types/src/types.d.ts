type AxiosInstance = import("axios").AxiosInstance;
type AxiosError = import("axios").AxiosError;
type Tidy_V2_ContactLink = {
    /**
     * - Alphanumeric ID associated with the contact this link is towards.
     */
    contact_id: number;
    /**
     * - The type of relationship (e.g., "Adult", "Child").
     */
    relationship_type: string;
    /**
     * - The title of the contact link.
     */
    title: string;
    /**
     * - Optional arbitrary metadata attached to the object.
     */
    metadata: string | null;
    /**
     * - Creation date and time of the contact link.
     */
    created_at: string;
    /**
     * - Last update date and time of the contact link.
     */
    updated_at: string;
    /**
     * - Humanized version of the type field, suitable for display.
     */
    display_name: string;
    /**
     * - [!] TBA
     */
    type: string;
};
type Tidy_V2_ContactGroup = {
    /**
     * - Alphanumeric ID associated with the group.
     */
    id: number;
    /**
     * - Label of the group.
     */
    label: string;
    /**
     * - Reference to the group ID in V1 API.
     */
    group_id_reference: string;
    /**
     * - Description of the group.
     */
    description: string;
    /**
     * - Creation date and time of the group.
     */
    created_at: string;
    /**
     * - Last update date and time of the group.
     */
    updated_at: string;
    /**
     * - Number of contacts within the group.
     */
    size: number;
    /**
     * - URL to the image that represents the group.
     */
    image: string;
};
type Tidy_V2_ContactOrganization = {
    /**
     * - Unique identifier for the organization.
     */
    id: string;
    /**
     * - Name of the organization.
     */
    name: string;
    /**
     * - Domain prefix of the organization.
     */
    domain_prefix: string;
    /**
     * Permissions user has for the organization.
     */
    permissions: string[];
};
type Tidy_V2_Contact = {
    /**
     * - The unique alphanumeric identifier for the contact.
     */
    id: string;
    /**
     * - Reference to the contact ID in V1 API.
     */
    contact_id_reference: number;
    /**
     * - First name of the contact.
     */
    first_name: string;
    /**
     * - Last name of the contact.
     */
    last_name: string;
    /**
     * - Nickname of the contact.
     */
    nick_name: string;
    /**
     * - Company name associated with the contact.
     */
    company: string;
    /**
     * - Email address of the contact.
     */
    email_address: string;
    /**
     * - Phone number of the contact.
     */
    phone_number: string;
    /**
     * - Street address of the contact.
     */
    address1: string;
    /**
     * - City of the contact.
     */
    city: string;
    /**
     * - State of the contact.
     */
    state: string | null;
    /**
     * - Country of the contact.
     */
    country: string;
    /**
     * - Postcode of the contact.
     */
    postcode: string;
    /**
     * - Gender of the contact.
     */
    gender: string;
    /**
     * - Birthday of the contact.
     */
    birthday: string | null;
    /**
     * - Facebook profile URL of the contact.
     */
    facebook: string;
    /**
     * - Twitter handle of the contact.
     */
    twitter: string;
    /**
     * - LinkedIn profile URL of the contact.
     */
    linkedin: string;
    /**
     * - Instagram handle of the contact.
     */
    instagram: string;
    /**
     * - Website URL of the contact.
     */
    website: string | null;
    /**
     * - Additional details about the contact.
     */
    details: string | null;
    /**
     * - Subscription status of the contact.
     */
    subscribed: boolean;
    /**
     * - Metadata associated with the contact.
     */
    metadata: string | null;
    /**
     * - Creation date and time of the contact record.
     */
    created_at: string;
    /**
     * - Last update date and time of the contact record.
     */
    updated_at: string;
    /**
     * - Initials of the contact.
     */
    initials: string;
    /**
     * - Emergency contact person for the contact.
     */
    emergency_contact_person: string | null;
    /**
     * - Emergency contact number for the contact.
     */
    emergency_contact_number: string | null;
    /**
     * - Date since the contact is a member.
     */
    member_since: string;
    /**
     * - Flag indicating if the contact is a company.
     */
    is_company: boolean;
    /**
     * - Type of the contact (e.g., person).
     */
    kind: string;
    /**
     * - Display name of the contact.
     */
    display_name: string;
    /**
     * - Contact ID number.
     */
    contact_id_number: string;
    /**
     * - URL to the profile image of the contact.
     */
    profile_image: string | null;
    /**
     * - Status of the contact (e.g., active).
     */
    status: string;
    /**
     * - Organization associated with the contact.
     */
    organization: Tidy_V2_ContactOrganization;
    /**
     * - Groups associated with the contact.
     */
    groups: Tidy_V2_ContactGroup[];
    /**
     * - Links associated with the contact.
     */
    contact_links: Tidy_V2_ContactLink[];
    /**
     * - Notes associated with the contact.
     */
    notes: Tidy_V2_Note[];
};
type Tidy_V2_ContactFilterEqualsOptions = {
    /**
     * - Filter by the first name.
     */
    first_name?: string | undefined;
    /**
     * - Filter by the last name.
     */
    last_name?: string | undefined;
    /**
     * - Filter by the company name.
     */
    company?: string | undefined;
    /**
     * - Filter by the email address.
     */
    email_address?: string | undefined;
    /**
     * - Filter by the phone number.
     */
    phone_number?: string | undefined;
    /**
     * - Filter by the kind.
     */
    kind?: string | undefined;
    /**
     * - Filter by the contact ID number.
     */
    contact_id_number?: string | undefined;
};
type Tidy_V2_MatchableContact = {
    /**
     * - The unique identifier for the contact.
     */
    contact_id?: string | undefined;
    /**
     * - The email address of the contact.
     */
    email?: string | undefined;
    /**
     * - The first name of the contact.
     */
    first_name?: string | undefined;
    /**
     * - The last name of the contact.
     */
    last_name?: string | undefined;
};
type Tidy_V2_Membership = {
    /**
     * - The unique identifier for the membership.
     */
    id: string;
    /**
     * - The creation date and time of the membership.
     */
    created_at: string;
    /**
     * - The last update date and time of the membership.
     */
    updated_at: string;
    /**
     * - The state of the membership.
     */
    state: string;
    /**
     * - Human-readable version of the state.
     */
    status: string;
    /**
     * - Reference to the membership ID in V1 API.
     */
    membership_id_reference: number;
    /**
     * - If the membership is set to auto-renew.
     */
    auto_renew_on: boolean;
    /**
     * - If the membership is set to auto-renew.
     */
    auto_renew: boolean;
    /**
     * - The ID of the membership level.
     */
    membership_level_id: string;
    /**
     * - The ID of the contact associated with the membership.
     */
    contact_id: string;
    /**
     * - The IDs of the adult members associated with the membership.
     */
    adult_members_contact_ids: string[];
    /**
     * - The IDs of the child members associated with the membership.
     */
    child_members_contact_ids: string[];
    /**
     * - The start date of the membership.
     */
    start_date: string;
    /**
     * - The end date of the membership.
     */
    end_date: string;
    /**
     * - The notes associated with the membership.
     */
    notes: Tidy_V2_Note[];
};
type Tidy_V2_Subscription = {
    /**
     * - The unique identifier for the subscription.
     */
    id: string;
    /**
     * - The state of the subscription.
     */
    state: string;
    /**
     * - Human-readable version of the state.
     */
    status: string;
    /**
     * - The creation date and time of the subscription.
     */
    created_at: string;
    /**
     * - The last update date and time of the subscription.
     */
    updated_at: string;
    /**
     * - The start date of the subscription.
     */
    start_date: string;
    /**
     * - The end date of the subscription.
     */
    end_date: string;
    /**
     * - The ID of the associated membership.
     */
    membership_id: string;
    /**
     * - The variations associated with the subscription.
     */
    variations: Tidy_V2_Variation[];
};
type Tidy_V2_Variation = {
    /**
     * - The visibility of the variation.
     */
    visibility: string;
    /**
     * - The price of the variation.
     */
    price: string;
    /**
     * - The answer associated with the variation.
     */
    answer: Tidy_V2_VariationAnswer;
    /**
     * - The destination associated with the variation.
     */
    destination: Tidy_V2_PricingVariationDestination;
    /**
     * - The autofill group associated with the variation.
     */
    autofill_group: Tidy_V2_PricingVariationAutofillGroup;
    /**
     * - The question associated with the variation.
     */
    question: Tidy_V2_VariationQuestion;
};
type Tidy_V2_VariationAnswer = {
    /**
     * - The unique identifier for the answer.
     */
    id: string;
    /**
     * - The value of the answer.
     */
    value: string;
    /**
     * - The last update date and time of the answer.
     */
    updated_at: string;
};
type Tidy_V2_VariationQuestion = {
    /**
     * - The unique identifier for the question.
     */
    id: string;
    /**
     * - The name of the question.
     */
    name: string;
    /**
     * - Whether the question is required.
     */
    required: boolean;
    /**
     * - The creation date and time of the question.
     */
    created_at: string;
    /**
     * - The last update date and time of the question.
     */
    updated_at: string;
};
type Tidy_V2_PricingVariationDestination = {
    /**
     * - The unique identifier for the destination.
     */
    id: string;
    /**
     * - The type of the destination.
     */
    type: string;
    /**
     * - Human-readable version of the type of destination.
     */
    title: string;
    /**
     * - The name of the destination.
     */
    name: string;
};
type Tidy_V2_PricingVariationAutofillGroup = {
    /**
     * - The unique identifier for the autofill group.
     */
    id: string;
    /**
     * - The reference ID for the group.
     */
    group_id_reference: number;
    /**
     * - The name of the autofill group.
     */
    name: string;
};
type Tidy_V2_PostSubscriptionParams = {
    /**
     * - On an individual membership level, change who it belongs to.
     */
    member?: Tidy_V2_MatchableContact | undefined;
    /**
     * - For family memberships, changes the associated adults.
     */
    adult?: Tidy_V2_MatchableContact[] | undefined;
    /**
     * - For family memberships, changes the associated children.
     */
    children?: Tidy_V2_MatchableContact[] | undefined;
    /**
     * - A object mapping variation ids to variation value ids.
     */
    variations?: {
        [x: string]: string;
    } | undefined;
    /**
     * - Payment status of subscription, note that paid covers partially paid subscriptions.
     */
    payment_type: "paid" | "invoice" | "pay_now";
    /**
     * - Required when payment_type is paid, How the paid amount was paid.
     */
    payment_method: Tidy_V1_PaymentType;
    /**
     * - When marked as paid, and it's already partially-paid, an amount that has already been paid.
     */
    partial_payment_amount?: string | undefined;
    /**
     * - When marked as paid, allows overriding the transaction ref for the given paid transaction. If left blank, will be automatically generated.
     */
    ref_no?: string | undefined;
    /**
     * - When paying by invoice, when said invoice is due.
     */
    due_date?: string | undefined;
    /**
     * - Send a membership welcome email.
     */
    send_welcome_mail?: boolean | undefined;
    /**
     * - When paying by invoice, should we send an email with invoice details.
     */
    send_invoice_mail?: boolean | undefined;
    /**
     * - When processing contacts on the membership, should we automatically assign (either find existing, or create a new) user for them in Tidy. If users are created, will automatically send an account sign up email as well. For users to be automatically created / assigned, they require all of a first name, last name and an email address.
     */
    auto_assign_users?: boolean | undefined;
    /**
     * - Will set explicitly if the membership should auto renew, if possible. Defaults to use the value set on the membership level, but can overwrite if needed.
     */
    auto_renew?: boolean | undefined;
    /**
     * - The start date of the membership.
     */
    start_date?: string | undefined;
    /**
     * - The end date of the membership.
     */
    end_date?: string | undefined;
};
type Tidy_V2_MembershipLevel = {
    /**
     * - The unique identifier for the membership level.
     */
    id: string;
    /**
     * - Reference to the membership level ID in V1 API.
     */
    membership_level_id_reference: number;
    /**
     * - The name of the membership level.
     */
    name: string;
    /**
     * - The description of the membership level, may contain HTML.
     */
    description: string;
    /**
     * - The duration of the membership level.
     */
    duration: number;
    /**
     * - The unit of period for the duration.
     */
    unit_period: Tidy_V1_MembershipLevelUnitPeriod;
    /**
     * - The date since the membership level is active.
     */
    active_since: string | null;
    /**
     * - If the membership level is a bundle.
     */
    bundle: boolean;
    /**
     * - The type of plan (e.g., rolling).
     */
    plan_type: string;
    /**
     * - If the membership level is set to auto-renew.
     */
    auto_renew: boolean;
    /**
     * - If the membership level allows renewal.
     */
    allow_renewal: boolean;
    /**
     * - The period from which renewal is allowed.
     */
    renewable_from_period: number | null;
    /**
     * - The period for which renewal is allowed.
     */
    renewable_for_period: number | null;
    /**
     * - The start date of the membership level.
     */
    start_at: string | null;
    /**
     * - The creation date and time of the membership level.
     */
    created_at: string;
    /**
     * - The last update date and time of the membership level.
     */
    updated_at: string;
    /**
     * - Visibility of the membership level.
     */
    visible: "anyone" | "admin" | "linked" | "permitted";
    /**
     * - The price of the membership level.
     */
    amount: number;
    /**
     * - If the membership level is deleted.
     */
    deleted: boolean;
    /**
     * - The amounts associated with the bundle.
     */
    bundle_amounts?: Tidy_V2_MembershipLevelBundleAmount[] | undefined;
};
type Tidy_V2_MembershipLevelBundleAmount = {
    /**
     * - The amount for the bundle.
     */
    amount: string;
    /**
     * - Flag indicating if the amount is for subsequent periods.
     */
    subsequent: boolean;
    /**
     * - The type of member the amount applies to (e.g., adult, child).
     */
    type: string;
};
type Tidy_V2_Note = {
    /**
     * - The unique identifier for the note.
     */
    id: string;
    /**
     * - The content of the note.
     */
    text: string;
    /**
     * - The creation date and time of the note.
     */
    created_at: string;
    /**
     * - The last update date and time of the note.
     */
    updated_at: string;
    /**
     * - The author of the note. [!]
     */
    author: Object;
};
type Tidy_V2_Organization = {
    /**
     * - The unique identifier for the organization.
     */
    id: string;
    /**
     * - The name of the organization.
     */
    name: string;
    /**
     * - The domain prefix of the organization.
     */
    domain_prefix: string;
    /**
     * - The location of the organization.
     */
    location: string;
    /**
     * - The street address of the organization.
     */
    address: string;
    /**
     * - The city of the organization.
     */
    city: string;
    /**
     * - The state of the organization.
     */
    state: string;
    /**
     * - The postcode of the organization.
     */
    postcode: string;
    /**
     * - The country of the organization.
     */
    country: string;
    /**
     * - The phone number of the organization.
     */
    phone: string;
    /**
     * - The website URL of the organization.
     */
    website: string;
    /**
     * - The Twitter handle of the organization.
     */
    twitter: string;
    /**
     * - The Facebook profile URL of the organization.
     */
    facebook: string;
    /**
     * - The currency used by the organization.
     */
    currency: string;
    /**
     * - The time zone of the organization.
     */
    time_zone: string;
    /**
     * - The public contacts of the organization.
     */
    public_contacts: Tidy_V1_OrganizationPublicContact[];
    /**
     * - The URL to the logo of the organization.
     */
    logo_url: Object;
    /**
     * - The creation date and time of the organization.
     */
    created_at: string;
    /**
     * - The last update date and time of the organization.
     */
    updated_at: string;
    /**
     * - The plan of the organization.
     */
    plan: {
        name: string;
        quota: Tidy_V1_OrganizationPlanQuota;
    };
    /**
     * - The parent organizations of the organization.
     */
    parent_organizations: Tidy_V1_OrganizationLink[];
    /**
     * - The child organizations of the organization.
     */
    child_organizations: Tidy_V1_OrganizationLink[];
};
type Tidy_V2_OrganizationRole = {
    /**
     * - The unique identifier for the role.
     */
    id: string;
    /**
     * - The name of the role.
     */
    name: string;
    /**
     * - The email address to contact the members of this role.
     */
    email_address: string;
    /**
     * - The responsibilities of the role.
     */
    responsibilities: string;
    /**
     * - The contact IDs associated with the role.
     */
    contact_ids: string[];
    /**
     * - The creation date and time of the role.
     */
    created_at: string;
    /**
     * - The last update date and time of the role.
     */
    updated_at: string;
};
type Tidy_V2_Webhook = {
    /**
     * - The unique identifier for the webhook.
     */
    id: string;
    /**
     * - The status of the webhook. [!] TBA add all possible values
     */
    status: string;
    /**
     * - The creation date and time of the webhook.
     */
    created_at: string;
    /**
     * - The last update date and time of the webhook.
     */
    updated_at: string;
    /**
     * - The kind of events to match for the webhook.
     */
    matching_kind: string;
    /**
     * - The URL to which the webhook sends data.
     */
    url: string;
    /**
     * - A description of the webhook.
     */
    description: string;
    /**
     * - The base64 encoded signing key for the webhook.
     */
    signing_key_b64: string;
    /**
     * - Whether the webhook allows state changes.
     */
    allow_state_changes: boolean;
};
type Tidy_V2_WebhookMessage = {
    /**
     * - The unique identifier for the webhook message.
     */
    id: string;
    /**
     * - The kind of the event, e.g., "event.ticket.updated".
     */
    kind: string;
    /**
     * - The type of object of the data, e.g., "event.ticket".
     */
    object: string;
    /**
     * - The creation date and time of the webhook message.
     */
    created: string;
    /**
     * - The data of the webhook message.
     */
    data: Object;
};
type Tidy_V1_Category = {
    /**
     * - The unique identifier for the category.
     */
    id: number;
    /**
     * - The name of the category.
     */
    name: string;
    /**
     * - The description of the category.
     */
    description: string;
    /**
     * - The balance of the category in various currencies, with currency codes as keys and amounts as values. E.g., { "AUD": -20.0, "USD": 42.0 }.
     */
    balance: {
        [x: string]: number;
    };
    /**
     * - The creation date and time of the category in ISO 8601 format.
     */
    created_at: string;
};
type Tidy_V1_ContactGender = "female" | "male" | "non_binary" | "undisclosed";
type Tidy_V1_ContactLink = {
    /**
     * - The contact ID of the linked contact.
     */
    contact_id: number;
    /**
     * - The type of relationship (e.g., "Adult", "Child").
     */
    relationship_type: string;
};
type Tidy_V1_ContactGroup = {
    /**
     * - Unique identifier for the group.
     */
    id: number;
    /**
     * - Label of the group.
     */
    label: string;
};
type Tidy_V1_ContactOrganization = {
    /**
     * - Unique identifier for the organization.
     */
    id: string;
    /**
     * - Name of the organization.
     */
    name: string;
    /**
     * - Domain prefix of the organization.
     */
    domain_prefix: string;
};
type Tidy_V1_Contact = {
    /**
     * - Unique identifier for the contact.
     */
    id: number;
    /**
     * - First name of the contact.
     */
    first_name: string;
    /**
     * - Last name of the contact.
     */
    last_name: string;
    /**
     * - Nickname of the contact.
     */
    nick_name: string;
    /**
     * - Company name associated with the contact.
     */
    company: string;
    /**
     * - Email address of the contact.
     */
    email_address: string;
    /**
     * - Phone number of the contact.
     */
    phone_number: string;
    /**
     * - Street address of the contact.
     */
    address1: string;
    /**
     * - City of the contact.
     */
    city: string;
    /**
     * - State of the contact.
     */
    state: string | null;
    /**
     * - Country of the contact.
     */
    country: string;
    /**
     * - Postcode of the contact.
     */
    postcode: string;
    /**
     * - Gender of the contact.
     */
    gender: Tidy_V1_ContactGender;
    /**
     * - Birthday of the contact.
     */
    birthday: string | null;
    /**
     * - Facebook profile URL of the contact.
     */
    facebook: string;
    /**
     * - Twitter handle of the contact.
     */
    twitter: string;
    /**
     * - LinkedIn profile URL of the contact.
     */
    linkedin: string;
    /**
     * - Instagram handle of the contact.
     */
    instagram: string;
    /**
     * - Website URL of the contact.
     */
    website: string | null;
    /**
     * - Additional details about the contact.
     */
    details: string | null;
    /**
     * - Subscription status of the contact.
     */
    subscribed: boolean;
    /**
     * - Metadata associated with the contact.
     */
    metadata: string | null;
    /**
     * - Creation date and time of the contact record.
     */
    created_at: string;
    /**
     * - Last update date and time of the contact record.
     */
    updated_at: string;
    /**
     * - Emergency contact person for the contact.
     */
    emergency_contact_person: string | null;
    /**
     * - Emergency contact number for the contact.
     */
    emergency_contact_number: string | null;
    /**
     * - Date since the contact is a member.
     */
    member_since: string;
    /**
     * - Flag indicating if the contact is a company.
     */
    is_company: boolean;
    /**
     * - Type of the contact (e.g., person).
     */
    kind: string;
    /**
     * - Display name of the contact.
     */
    display_name: string;
    /**
     * - Secondary identifier for the contact.
     */
    contact_id: number;
    /**
     * - Contact ID number.
     */
    contact_id_number: string;
    /**
     * - URL to the profile image of the contact.
     */
    profile_image: string | null;
    /**
     * - Status of the contact (e.g., active).
     */
    status: string;
    /**
     * - Custom fields associated with the contact.
     */
    custom_fields: Tidy_V1_CustomField[];
    /**
     * - Organization associated with the contact.
     */
    organization: Tidy_V1_ContactOrganization;
    /**
     * - Groups associated with the contact.
     */
    groups: Tidy_V1_ContactGroup[];
    /**
     * - Links associated with the contact.
     */
    contact_links: Tidy_V1_ContactLink[];
};
type Tidy_V1_ContactCustomFields = Object;
type Tidy_V1_ContactParams = {
    /**
     * - First name of the contact. Required only on creation.
     */
    first_name?: string | undefined;
    /**
     * - Last name of the contact.
     */
    last_name?: string | undefined;
    /**
     * - Email address of the contact.
     */
    email_address?: string | undefined;
    /**
     * - Phone number of the contact.
     */
    phone_number?: string | undefined;
    /**
     * - Street address of the contact.
     */
    address1?: string | undefined;
    /**
     * - City of the contact.
     */
    city?: string | undefined;
    /**
     * - State of the contact.
     */
    state?: string | undefined;
    /**
     * - Country of the contact.
     */
    country?: string | undefined;
    /**
     * - Postcode of the contact.
     */
    postcode?: string | undefined;
    /**
     * - Gender of the contact.
     */
    gender?: Tidy_V1_ContactGender | undefined;
    /**
     * - Birthday of the contact in ISO 8601 format.
     */
    birthday?: string | undefined;
    /**
     * - Facebook account name of the contact.
     */
    facebook?: string | undefined;
    /**
     * - Twitter account name of the contact.
     */
    twitter?: string | undefined;
    /**
     * - A brief description of the contact.
     */
    details?: string | undefined;
    /**
     * - A struct of custom field IDs as keys and values.
     */
    custom_fields?: Object | undefined;
};
type Tidy_V1_CustomFieldType = "string" | "text" | "dropdown" | "boolean" | "date";
type Tidy_V1_CustomField = {
    /**
     * - The unique identifier for the custom field.
     */
    id: string;
    /**
     * - The title of the custom field.
     */
    title: string;
    /**
     * - The type of the custom field.
     */
    type: Tidy_V1_CustomFieldType;
    /**
     * - The creation date and time of the custom field.
     */
    created_at: string;
    /**
     * - Optional. The choices for the custom field, applicable if the type is "dropdown".
     */
    choices?: Tidy_V1_CustomFieldChoice[] | undefined;
};
type Tidy_V1_CustomFieldChoice = {
    /**
     * - The unique identifier for the custom field choice.
     */
    id: string;
    /**
     * - The title of the custom field choice.
     */
    title: string;
    /**
     * - The creation date and time of the custom field choice.
     */
    created_at: string;
};
type Tidy_V1_PaymentType = "cash" | "card" | "cheque" | "bank" | "other";
type Tidy_V1_PaymentStatus = "paid" | "cancelled";
type Tidy_V1_FinanceStatus = "activated" | "cancelled";
type Tidy_V1_Payment = {
    /**
     * - The unique identifier for the payment.
     */
    id: string;
    /**
     * - The amount of the payment.
     */
    amount: number;
    /**
     * - The type of the payment.
     */
    type: Tidy_V1_PaymentType;
    /**
     * - The timestamp when the payment was made.
     */
    paid_at: string;
    /**
     * - The status of the payment.
     */
    status: Tidy_V1_PaymentStatus;
};
type Tidy_V1_Deposit = {
    /**
     * - The unique identifier for the deposit.
     */
    id: string;
    /**
     * - The reference number of the deposit.
     */
    ref_no: string;
    /**
     * - The ID of the contact associated with the deposit.
     */
    contact_id: number;
    /**
     * - The type of the transaction.
     */
    type: "deposit";
    /**
     * - The name of the deposit.
     */
    name: string;
    /**
     * - The description of the deposit.
     */
    description: string | null;
    /**
     * - The category ID of the deposit.
     */
    category_id: number;
    /**
     * - The currency of the deposit amount.
     */
    currency: string;
    /**
     * - The amount of the deposit.
     */
    amount: number;
    /**
     * - Additional metadata associated with the deposit.
     */
    metadata: string | null;
    /**
     * - The status of the deposit.
     */
    status: Tidy_V1_FinanceStatus;
    /**
     * - The payments associated with the deposit.
     */
    payments: Tidy_V1_Payment[];
};
type Tidy_V1_DepositParams = {
    /**
     * - The name of the deposit.
     */
    name: string;
    /**
     * - The amount of the deposit as a decimal.
     */
    amount: number;
    /**
     * - The date that the deposit was paid in ISO 8601 format.
     */
    paid_date: string;
    /**
     * - The category of the deposit.
     */
    category_id: number;
    /**
     * - The source of the deposit.
     */
    contact_id: number;
};
type Tidy_V1_Expense = {
    /**
     * - The unique identifier for the expense.
     */
    id: string;
    /**
     * - The reference number of the expense.
     */
    ref_no: string;
    /**
     * - The ID of the contact associated with the expense.
     */
    contact_id: number;
    /**
     * - The type of the transaction.
     */
    type: "expense";
    /**
     * - The name of the expense.
     */
    name: string;
    /**
     * - The description of the expense.
     */
    description: string | null;
    /**
     * - The due date of the expense.
     */
    due_date: string;
    /**
     * - The category ID of the expense.
     */
    category_id: number;
    /**
     * - The total amount of the expense.
     */
    amount: number;
    /**
     * - The amount that has been paid towards the expense.
     */
    amount_paid: number;
    /**
     * - The amount that is still due.
     */
    amount_due: number;
    /**
     * - Whether the expense has been fully paid or not.
     */
    paid: boolean;
    /**
     * - Additional metadata associated with the expense.
     */
    metadata: string | null;
    /**
     * - The status of the expense.
     */
    status: Tidy_V1_FinanceStatus;
    /**
     * - The payments associated with the expense.
     */
    payments: Tidy_V1_Payment[];
};
type Tidy_V1_ExpenseParams = {
    /**
     * - The name of the expense.
     */
    name: string;
    /**
     * - The amount of the expense.
     */
    amount: number;
    /**
     * - The due date of the expense in ISO 8601 format.
     */
    due_date: string;
    /**
     * - The category of the expense.
     */
    category_id: string;
    /**
     * - The source of the expense.
     */
    contact_id: string;
    /**
     * - The description of the expense.
     */
    description?: string | undefined;
    /**
     * - The metadata of the expense.
     */
    metadata?: string | undefined;
};
type Tidy_V1_Invoice = {
    /**
     * - The unique identifier for the invoice.
     */
    id: string;
    /**
     * - The reference number of the invoice.
     */
    ref_no: string;
    /**
     * - The ID of the contact associated with the invoice.
     */
    contact_id: number;
    /**
     * - The type of the transaction.
     */
    type: "invoice";
    /**
     * - The name of the invoice.
     */
    name: string;
    /**
     * - The description of the invoice.
     */
    description: string | null;
    /**
     * - The due date of the invoice.
     */
    due_date: string;
    /**
     * - The category ID of the invoice.
     */
    category_id: number;
    /**
     * - The total amount of the invoice.
     */
    amount: number;
    /**
     * - The amount that has been paid towards the invoice.
     */
    amount_paid: number;
    /**
     * - The amount that is still due.
     */
    amount_due: number;
    /**
     * - Whether the invoice has been fully paid or not.
     */
    paid: boolean;
    /**
     * - Additional metadata associated with the invoice.
     */
    metadata: string | null;
    /**
     * - The status of the invoice.
     */
    status: Tidy_V1_FinanceStatus;
    /**
     * - The payments associated with the invoice.
     */
    payments: Tidy_V1_Payment[];
};
type Tidy_V1_InvoiceParams = {
    /**
     * - The reference of the invoice. e.g. 'Invoice #1234'
     */
    reference: string;
    /**
     * - The amount of the invoice expressed as a decimal.
     */
    amount: number;
    /**
     * - The total amount of tax expressed as a decimal.
     */
    included_tax_total: number;
    /**
     * - The total amount before tax expressed as a decimal.
     */
    pre_tax_amount: number;
    /**
     * - The due date of the invoice in ISO 8601 format.
     */
    due_date: string;
    /**
     * - The ID of the category to assign the invoice to.
     */
    category_id: number;
    /**
     * - The ID of the contact to assign the invoice to.
     */
    contact_id: number;
    /**
     * - The description of the invoice.
     */
    description?: string | undefined;
    /**
     * - The metadata of the invoice.
     */
    metadata?: string | undefined;
};
type Tidy_V1_TransactionItem = {
    /**
     * - The unique identifier for the item.
     */
    id: string;
    /**
     * - The quantity of the item.
     */
    quantity: string;
    /**
     * - The type of transaction.
     */
    type: "deposit" | "expense" | "invoice";
};
type Tidy_V1_Transaction = {
    /**
     * - The unique identifier for the transaction.
     */
    id: string;
    /**
     * - The ID of the category associated with the transaction.
     */
    category_id: number;
    /**
     * - The name of the category associated with the transaction.
     */
    category_name: string;
    /**
     * - The currency code for the transaction amount.
     */
    currency: string;
    /**
     * - The timestamp when the transaction was paid, in ISO 8601 format.
     */
    paid_at: string;
    /**
     * - The ID of the contact associated with the transaction.
     */
    contact_id: number;
    /**
     * - The display name of the contact associated with the transaction.
     */
    contact_name: string;
    /**
     * - The type of payment used for the transaction.
     */
    payment_type: Tidy_V1_PaymentType;
    /**
     * - Indicates whether a surcharge was applied to the transaction.
     */
    surcharge: boolean;
    /**
     * - The total amount of the transaction.
     */
    amount: number;
    /**
     * - The fee associated with the transaction, if any.
     */
    fee: number;
    /**
     * - The status of the transaction.
     */
    status: Tidy_V1_PaymentStatus;
    /**
     * - An array of items associated with the transaction.
     */
    items: Tidy_V1_TransactionItem[];
};
type Tidy_V1_Email = {
    /**
     * - The unique identifier for the email.
     */
    id: string;
    /**
     * - The ID of the sender.
     */
    sender_id: number;
    /**
     * - An array of IDs for the recipients.
     */
    recipient_ids: number[];
    /**
     * - The direction of the email (inbound or outbound).
     */
    way: "inbound" | "outbound";
    /**
     * - The type of the email.
     */
    type: "email" | "group_email";
    /**
     * - The subject of the email.
     */
    subject: string;
    /**
     * - The body text of the email.
     */
    body: string;
    /**
     * - The scheduled send time of the email, if any.
     */
    scheduled_at: string | null;
    /**
     * - Whether the email has been read.
     */
    read: boolean;
    /**
     * - Whether the email has been archived.
     */
    archived: boolean;
    /**
     * - Whether the email has been deleted.
     */
    deleted: boolean;
    /**
     * - Whether the email has been marked as junk.
     */
    junk: boolean;
    /**
     * - An array of attachments associated with the email.
     */
    attachments: Object[];
    /**
     * - The creation timestamp of the email.
     */
    created_at: string;
};
type Tidy_V1_Event = {
    /**
     * - The unique identifier for the event.
     */
    id: number;
    /**
     * - The name of the event.
     */
    name: string;
    /**
     * - The location of the event.
     */
    location: string | null;
    /**
     * - The start time of the event.
     */
    start_at: string;
    /**
     * - The end time of the event.
     */
    end_at: string;
    /**
     * - The body text of the event, which may contain HTML.
     */
    body: string;
    /**
     * - The creation timestamp of the event.
     */
    created_at: string;
    /**
     * - The ID of the category this event belongs to.
     */
    category_id: number;
    /**
     * - Whether the event is public.
     */
    public: boolean;
    /**
     * - The URL of the event's image.
     */
    image_url: string;
    /**
     * - The public URL of the event.
     */
    public_url: string;
    /**
     * - Whether the event has been archived.
     */
    archived: boolean;
};
type Tidy_V1_EventParams = {
    /**
     * - The name of the event. Required only on creation.
     */
    name?: string | undefined;
    /**
     * - The start date of the event in ISO 8601 format. Required only on creation.
     */
    start_at?: string | undefined;
    /**
     * - The end date of the event in ISO 8601 format.
     */
    end_at?: string | undefined;
    /**
     * - The description of the event.
     */
    body?: string | undefined;
    /**
     * - The location of the event. [!] There's an error in TidyHQ documentation/API regarding this field.
     */
    location?: string | undefined;
    /**
     * - Whether the event is archived or not (accessible via public events page).
     */
    archived?: boolean | undefined;
    /**
     * - Whether the event is hidden or not (showing on public events). When hidden and buying a ticket, certificates and receipts are not sent.
     */
    hidden?: boolean | undefined;
    /**
     * - The ID of the category to assign the event to (defaults to tickets category).
     */
    category_id?: number | undefined;
};
type Tidy_V1_Group = {
    /**
     * - The unique identifier for the group.
     */
    id: number;
    /**
     * - The label or name of the group.
     */
    label: string;
    /**
     * - The description of the group.
     */
    description: string | null;
    /**
     * - The creation timestamp of the group.
     */
    created_at: string;
    /**
     * - The number of contacts associated with the group.
     */
    contacts_count: number;
    /**
     * - The URL path to the group's logo image.
     */
    logo_image: string;
};
type Tidy_V1_Meeting = {
    /**
     * - The unique identifier for the meeting.
     */
    id: number;
    /**
     * - The name of the meeting.
     */
    name: string;
    /**
     * - The HTML description of the meeting.
     */
    description: string;
    /**
     * - The date and time of the meeting in ISO 8601 format.
     */
    date_at: string;
    /**
     * - The full address of the meeting location.
     */
    location_full_address: string | null;
    /**
     * - An array of topics discussed in the meeting.
     */
    topics: Tidy_V1_MeetingTopic[];
    /**
     * - Whether the meeting is public.
     */
    public: boolean;
    /**
     * - The creation timestamp of the meeting in ISO 8601 format.
     */
    created_at: string;
    /**
     * - An array of scheduled meeting topics.
     */
    schedule_meeting_topics: Tidy_V1_MeetingScheduleTopic[];
    /**
     * - An array of IDs representing the attendees of the meeting.
     */
    attendees: number[];
    /**
     * - An array of IDs representing the people who apologized for not attending the meeting.
     */
    apologies: number[];
    /**
     * - An array of IDs representing the people who might attend the meeting.
     */
    maybe: number[];
    /**
     * - An array of IDs representing the minute takers of the meeting.
     */
    minute_takers: number[];
    /**
     * - An array of IDs representing the chairpersons of the meeting.
     */
    chairpersons: number[];
    /**
     * - The public URL to access the meeting.
     */
    public_url: string;
};
type Tidy_V1_MeetingTopicCategory = "idea" | "info" | "todo";
type Tidy_V1_MeetingTopic = {
    /**
     * - The unique identifier for the topic.
     */
    id: number;
    /**
     * - The name of the topic.
     */
    name: string;
    /**
     * - The category of the topic.
     */
    category: Tidy_V1_MeetingTopicCategory;
    /**
     * - The ID of the scheduled meeting this topic is associated with.
     */
    schedule_meeting_id: number;
    /**
     * - The position of the topic in the meeting.
     */
    position: number;
    /**
     * - The duration of the topic in minutes.
     */
    duration: number | null;
    /**
     * - The creation timestamp of the topic.
     */
    created_at: string;
    /**
     * - The update timestamp of the topic.
     */
    updated_at: string;
    /**
     * - The HTML description of the topic.
     */
    description: string;
    /**
     * - The decision made regarding the topic.
     */
    decision: string | null;
    /**
     * - The ID of the parent topic.
     */
    parent_id: number | null;
    /**
     * - A unique hex code identifying the topic.
     */
    code: string;
    /**
     * - The deletion timestamp of the topic.
     */
    deleted_at: string | null;
    /**
     * - The ID of the member associated with the topic.
     */
    member_id: number | null;
    /**
     * - The revision number of the topic.
     */
    revision: number;
    /**
     * - The ID of the last member who edited the topic.
     */
    last_edited_by_id: number;
};
type Tidy_V1_MeetingScheduleTopic = {
    /**
     * - The ID of the member associated with the scheduled meeting topic.
     */
    member_id: number | null;
    /**
     * - The category of the scheduled meeting topic.
     */
    category: Tidy_V1_MeetingTopicCategory;
    /**
     * - The name of the scheduled meeting topic.
     */
    name: string;
    /**
     * - The HTML description of the scheduled meeting topic.
     */
    description: string;
    /**
     * - The decision made regarding the scheduled meeting topic.
     */
    decision: string | null;
    /**
     * - The creation timestamp of the scheduled meeting topic.
     */
    created_at: string;
    /**
     * - The task associated with the scheduled meeting topic.
     */
    task: Tidy_V1_Task | null;
};
type Tidy_V1_MembershipLevelUnitPeriod = "day" | "week" | "month" | "year";
type Tidy_V1_MembershipLevel = {
    /**
     * - The unique identifier for the membership level.
     */
    id: number;
    /**
     * - The name of the membership level.
     */
    name: string;
    /**
     * - The description of the membership level.
     */
    description: string;
    /**
     * - The duration of the membership level.
     */
    duration: number;
    /**
     * - The unit of period for the duration.
     */
    unit_period: Tidy_V1_MembershipLevelUnitPeriod;
    /**
     * - Whether the membership level has a fixed start date.
     */
    fixed: boolean;
    /**
     * - The start date of the membership level, if fixed.
     */
    start_at: string | null;
    /**
     * - Whether the membership level is enabled.
     */
    enabled: boolean;
    /**
     * - The date since the membership level has been active.
     */
    active_since: string | null;
    /**
     * - The amount associated with the membership level.
     */
    amount: string;
    /**
     * - Whether the membership level is part of a bundle.
     */
    bundle: boolean;
    /**
     * - The bundle amounts, applicable if the membership level is part of a bundle.
     */
    bundle_amounts: Tidy_V1_BundleAmount[] | null;
    /**
     * - Whether the membership level is marked as deleted.
     */
    deleted: boolean;
    /**
     * - The type of plan (e.g., "rolling").
     */
    plan_type: string;
    /**
     * - Whether the membership level auto-renews.
     */
    auto_renew: boolean;
    /**
     * - The creation timestamp of the membership level.
     */
    created_at: string;
};
type Tidy_V1_BundleAmount = {
    /**
     * - The amount for the bundle.
     */
    amount: string;
    /**
     * - Whether this amount applies to subsequent members.
     */
    subsequent: boolean;
    /**
     * - The type of member this amount applies to (e.g., "adult", "child").
     */
    type: string;
};
type Tidy_V1_PricingVariation = {
    /**
     * - An array of state-specific pricing variations.
     */
    State: Tidy_V1_PricingVariationState[];
};
type Tidy_V1_PricingVariationState = {
    /**
     * - The name of the state or group for this pricing variation.
     */
    name: string;
    /**
     * - The amount associated with this state or group.
     */
    amount: string;
    /**
     * - The destination organization details for this pricing variation.
     */
    destination: Tidy_V1_PricingVariationDestination;
    /**
     * - The autofill group details associated with this pricing variation.
     */
    autofill_group: Tidy_V1_PricingVariationAutofillGroup;
    /**
     * - An array of club-specific pricing variations within the state.
     */
    Club: Tidy_V1_PricingVariationClub[];
};
type Tidy_V1_PricingVariationClub = {
    /**
     * - The name of the club for this pricing variation.
     */
    name: string;
    /**
     * - The amount associated with this club.
     */
    amount: string;
    /**
     * - The destination organization details for this club's pricing variation.
     */
    destination: Tidy_V1_PricingVariationDestination;
    /**
     * - The autofill group details associated with this club's pricing variation.
     */
    autofill_group: Tidy_V1_PricingVariationAutofillGroup;
};
type Tidy_V1_PricingVariationDestination = {
    /**
     * - The unique identifier for the destination.
     */
    id: string;
    /**
     * - The type of the destination (e.g., "Organisation").
     */
    type: string;
    /**
     * - The name of the destination.
     */
    name: string;
};
type Tidy_V1_PricingVariationAutofillGroup = {
    /**
     * - The unique identifier for the autofill group.
     */
    id: number;
    /**
     * - The name of the autofill group.
     */
    name: string;
};
type Tidy_V1_Membership = {
    /**
     * - The unique identifier for the membership.
     */
    id: number;
    /**
     * - The start date of the membership in ISO 8601 format.
     */
    start_date: string;
    /**
     * - The end date of the membership in ISO 8601 format.
     */
    end_date: string;
    /**
     * - The unique identifier for the contact associated with the membership.
     */
    contact_id: number;
    /**
     * - The unique identifier for the membership level.
     */
    membership_level_id: number;
    /**
     * - The state of the membership (e.g., "activated").
     */
    state: string;
    /**
     * - A reference ID for the membership.
     */
    membership_id_reference: number;
    /**
     * - A unique string identifier for the membership.
     */
    membership_id: string;
    /**
     * - The membership level details.
     */
    membership_level: Tidy_V1_MembershipLevelSummary;
    /**
     * - An array of subscriptions associated with the membership.
     */
    subscriptions: Tidy_V1_Subscription[];
    /**
     * - An array of adult members associated with the membership.
     */
    adult_members: Tidy_V1_MembershipMember[];
    /**
     * - An array of child members associated with the membership.
     */
    child_members: Tidy_V1_MembershipMember[];
    /**
     * - The creation timestamp of the membership in ISO 8601 format.
     */
    created_at: string;
};
type Tidy_V1_MembershipMember = {
    /**
     * - The unique identifier for the contact.
     */
    contact_id: number;
    /**
     * - The date since the contact has been a member in ISO 8601 format.
     */
    member_since: string;
};
type Tidy_V1_MembershipLevelSummary = {
    /**
     * - The unique identifier for the membership level.
     */
    id: number;
    /**
     * - The name of the membership level.
     */
    name: string;
    /**
     * - The type of plan (e.g., "rolling").
     */
    plan_type: string;
    /**
     * - Whether the membership level auto-renews.
     */
    auto_renew: boolean;
};
type Tidy_V1_Subscription = {
    /**
     * - The unique identifier for the subscription.
     */
    id: number;
    /**
     * - The start date of the subscription.
     */
    start_date: string;
    /**
     * - The end date of the subscription.
     */
    end_date: string;
    /**
     * - The status of the subscription (e.g., "Active", "Expired"). [!] Add all possible values.
     */
    status: string;
    /**
     * - An array of variations associated with the subscription.
     */
    variations: Tidy_V1_Variation[];
};
type Tidy_V1_Variation = {
    /**
     * - The question related to the variation.
     */
    question: string;
    /**
     * - The answer to the question.
     */
    answer: string;
    /**
     * - The price associated with the variation.
     */
    price: string;
    /**
     * - The destination details for the variation.
     */
    destination: Tidy_V1_PricingVariationDestination;
    /**
     * - The autofill group details for the variation.
     */
    autofill_group: Tidy_V1_PricingVariationAutofillGroup;
};
type Tidy_V1_OrganizationPublicContact = {
    /**
     * - The name of the contact.
     */
    name: string;
    /**
     * - The position of the contact.
     */
    position: string;
    /**
     * - The email address of the contact.
     */
    email: string;
    /**
     * - The phone number of the contact.
     */
    phone_number: string;
};
type Tidy_V1_OrganizationPlanQuota = {
    /**
     * - The email quota.
     */
    emails: {
        limit: Object;
        sent: Object;
        count: Object;
    };
    /**
     * - The contacts quota.
     */
    contacts: {
        limit: Object;
        count: Object;
    };
};
type Tidy_V1_OrganizationLink = {
    /**
     * - The unique identifier for the organization.
     */
    id: string;
    /**
     * - The name of the organization.
     */
    name: string;
};
type Tidy_V1_Organization = {
    /**
     * - The unique identifier for the organization.
     */
    id: string;
    /**
     * - The name of the organization.
     */
    name: string;
    /**
     * - The domain prefix of the organization.
     */
    domain_prefix: string;
    /**
     * - The location of the organization.
     */
    location: string;
    /**
     * - The street address of the organization.
     */
    address: string;
    /**
     * - The city of the organization.
     */
    city: string;
    /**
     * - The state of the organization.
     */
    state: string;
    /**
     * - The postcode of the organization.
     */
    postcode: string;
    /**
     * - The country of the organization.
     */
    country: string;
    /**
     * - The phone number of the organization.
     */
    phone: string;
    /**
     * - The website URL of the organization.
     */
    website: string;
    /**
     * - The Twitter handle of the organization.
     */
    twitter: string;
    /**
     * - The Facebook profile URL of the organization.
     */
    facebook: string;
    /**
     * - The currency used by the organization.
     */
    currency: string;
    /**
     * - The time zone of the organization.
     */
    time_zone: string;
    /**
     * - The public contacts of the organization.
     */
    public_contacts: Tidy_V1_OrganizationPublicContact[];
    /**
     * - The URL to the logo of the organization.
     */
    logo_url: Object;
    /**
     * - The plan of the organization.
     */
    plan: {
        name: string;
        quota: Tidy_V1_OrganizationPlanQuota;
    };
    /**
     * - The parent organizations of the organization.
     */
    parent_organizations: Tidy_V1_OrganizationLink[];
    /**
     * - The child organizations of the organization.
     */
    child_organizations: Tidy_V1_OrganizationLink[];
};
type Tidy_V1_Task = {
    /**
     * - The unique identifier for the task.
     */
    id: number;
    /**
     * - The title of the task.
     */
    title: string;
    /**
     * - The description of the task.
     */
    description: string | null;
    /**
     * - The due date of the task in ISO 8601 format.
     */
    due_date: string;
    /**
     * - The creation timestamp of the task.
     */
    created_at: string;
    /**
     * - The recurrence pattern of the task, if any.
     */
    recurrence: Tidy_V1_TaskRecurrence | null;
    /**
     * - The ID of the contact associated with the task, if any.
     */
    contact_id: number | null;
};
type Tidy_V1_TaskRecurrence = {
    /**
     * - The type of the recurrence
     */
    type: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * - The interval of the recurrence.
     */
    every: number;
    /**
     * - The end date of the recurrence in ISO 8601 format, if any.
     */
    end_date: string | null;
    /**
     * - An array of week day numbers (as strings) that the recurrence falls on (indexed 0 from Monday to 6 on Sunday)
     */
    week_day_numbers: string[];
    /**
     * - The day of the month the recurrence falls on.
     */
    day_of_month: number | null;
    /**
     * - The month the recurrence falls on.
     */
    month: number | null;
};
type Tidy_V1_Ticket = {
    /**
     * - The unique identifier for the ticket.
     */
    id: string;
    /**
     * - The name of the ticket.
     */
    name: string;
    /**
     * - The price of the ticket in decimal string format.
     */
    amount: string;
    /**
     * - The initial quantity of tickets available, null for unlimited.
     */
    initial_quantity: number | null;
    /**
     * - The number of tickets sold.
     */
    quantity_sold: number;
    /**
     * - The maximum number of tickets one can purchase, null for unlimited.
     */
    maximum_purchase: number | null;
    /**
     * - The end date and time of ticket sales in ISO 8601 format.
     */
    sales_end: string | null;
    /**
     * - Whether the ticket is available to members only.
     */
    members_only: boolean;
    /**
     * - The ID of the membership level required to purchase the ticket, if members_only is true.
     */
    membership_level_id: number | null;
    /**
     * - The creation timestamp of the ticket.
     */
    created_at: string;
};
type Tidy_V1_SoldTicket = {
    /**
     * - The ID of the contact who purchased the ticket.
     */
    contact_id: number;
    /**
     * - The unique identifier for the ticket purchased.
     */
    ticket_id: string;
    /**
     * - The timestamp when the ticket was sold, in ISO 8601 format.
     */
    created_at: string;
    /**
     * - A unique code associated with the sold ticket.
     */
    code: string;
};
type Tidy_V1_ShopProductVariant = {
    /**
     * - The unique identifier for the variant.
     */
    id: string;
    /**
     * - The name of the variant.
     */
    name: string;
    /**
     * - The quantity available for the variant, null for unlimited.
     */
    quantity: number | null;
    /**
     * - The creation timestamp of the variant, in ISO 8601 format.
     */
    created_at: string;
};
type Tidy_V1_ShopProduct = {
    /**
     * - The unique identifier for the product.
     */
    id: string;
    /**
     * - The name of the product.
     */
    name: string;
    /**
     * - The HTML description of the product.
     */
    description: string;
    /**
     * - A unique permalink for the product.
     */
    permalink: string;
    /**
     * - The selling price of the product.
     */
    sell_price: string;
    /**
     * - The cost price of the product.
     */
    cost_price: string;
    /**
     * - The ID of the selling category.
     */
    sell_category_id: number;
    /**
     * - The ID of the cost category.
     */
    cost_category_id: number;
    /**
     * - The quantity available, null for unlimited.
     */
    quantity: number | null;
    /**
     * - The creation timestamp of the product.
     */
    created_at: string;
    /**
     * - The status of the product
     */
    status: "draft" | "published";
    /**
     * - Who can see the product.
     */
    visible_to: "admin" | "group" | "public";
    /**
     * - An array of URLs to images of the product.
     */
    images: string[];
    /**
     * - An array of variants of the product.
     */
    variants: Tidy_V1_ShopProductVariant[];
};
type Tidy_V1_ShippingOption = {
    /**
     * - The unique identifier for the shipping option.
     */
    id: string;
    /**
     * - The name of the shipping option.
     */
    name: string;
    /**
     * - The description of the shipping option, may include newline characters.
     */
    description: string;
    /**
     * - The price of the shipping option.
     */
    price: string;
    /**
     * - The ID of the category associated with the shipping option.
     */
    category_id: number;
    /**
     * - Indicates whether an address is not required for this shipping option.
     */
    address_not_required: boolean;
    /**
     * - The creation timestamp of the shipping option, in ISO 8601 format.
     */
    created_at: string;
    /**
     * - An array of country codes where the shipping option is available.
     */
    country_codes: string[];
};
type Tidy_V1_ShopOrderProduct = {
    /**
     * - The unique identifier for the product.
     */
    product_id: string;
    /**
     * - The unique identifier for the variant of the product, null if not applicable.
     */
    variant_id: string | null;
    /**
     * - The quantity of the product ordered.
     */
    quantity: number;
};
type Tidy_V1_ShopOrder = {
    /**
     * - The unique identifier for the shipping order.
     */
    id: string;
    /**
     * - The ID of the contact associated with the order.
     */
    contact_id: number;
    /**
     * - The order number.
     */
    number: string;
    /**
     * - The status of the order.
     */
    status: "awaiting_payment" | "pending" | "completed" | "cancelled";
    /**
     * - The creation timestamp of the order, in ISO 8601 format.
     */
    created_at: string;
    /**
     * - The unique identifier for the selected shipping option.
     */
    shipping_option_id: string;
    /**
     * - An array of products included in the order.
     */
    products: Tidy_V1_ShopOrderProduct[];
};
type TidyAPI_Data = {
    /**
     * - The message.
     */
    message: string;
    /**
     * - Optional for error responses.
     */
    errors?: Object | undefined;
};
type TidyAPI_Response = {
    /**
     * - The payload returned from the request or error information.
     */
    data: TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_EmptyResponse = {
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Contact = {
    /**
     * - The contact.
     */
    data: Tidy_V1_Contact | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Contacts = {
    /**
     * - The contacts.
     */
    data: Tidy_V1_Contact[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Categories = {
    /**
     * - The categories.
     */
    data: Tidy_V1_Category[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_CustomField = {
    /**
     * - The custom field.
     */
    data: Tidy_V1_CustomField | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_CustomFields = {
    /**
     * - The custom fields.
     */
    data: Tidy_V1_CustomField[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_CustomFieldChoice = {
    /**
     * - The custom field.
     */
    data: Tidy_V1_CustomFieldChoice | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_CustomFieldChoices = {
    /**
     * - The custom fields.
     */
    data: Tidy_V1_CustomFieldChoice[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Deposit = {
    /**
     * - The deposit.
     */
    data: Tidy_V1_Deposit | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Deposits = {
    /**
     * - The deposits.
     */
    data: Tidy_V1_Deposit[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Email = {
    /**
     * - The email.
     */
    data: Tidy_V1_Email | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Emails = {
    /**
     * - The emails.
     */
    data: Tidy_V1_Email[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Event = {
    /**
     * - The event.
     */
    data: Tidy_V1_Event | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Events = {
    /**
     * - The events.
     */
    data: Tidy_V1_Event[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Expense = {
    /**
     * - The expense.
     */
    data: Tidy_V1_Expense | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Expenses = {
    /**
     * - The expenses.
     */
    data: Tidy_V1_Expense[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Group = {
    /**
     * - The group.
     */
    data: Tidy_V1_Group | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Groups = {
    /**
     * - The groups.
     */
    data: Tidy_V1_Group[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Invoice = {
    /**
     * - The invoice.
     */
    data: Tidy_V1_Invoice | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Invoices = {
    /**
     * - The invoices.
     */
    data: Tidy_V1_Invoice[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Meeting = {
    /**
     * - The meeting.
     */
    data: Tidy_V1_Meeting | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Meetings = {
    /**
     * - The meetings.
     */
    data: Tidy_V1_Meeting[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_MembershipLevel = {
    /**
     * - The membership level.
     */
    data: Tidy_V1_MembershipLevel | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_MembershipLevels = {
    /**
     * - The membership levels.
     */
    data: Tidy_V1_MembershipLevel[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Membership = {
    /**
     * - The membership.
     */
    data: Tidy_V1_Membership | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Memberships = {
    /**
     * - The memberships.
     */
    data: Tidy_V1_Membership[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Organization = {
    /**
     * - The organization.
     */
    data: Tidy_V1_Organization | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Organizations = {
    /**
     * - The organizations.
     */
    data: Tidy_V1_Organization[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_OrganizationContacts = {
    /**
     * - The organizations.
     */
    data: Tidy_V1_OrganizationPublicContact[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Payment = {
    /**
     * - The organizations.
     */
    data: Tidy_V1_Payment | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_PricingVariation = {
    /**
     * - The membership level pricing variations.
     */
    data: Tidy_V1_PricingVariation[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Task = {
    /**
     * - The task.
     */
    data: Tidy_V1_Task | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Tasks = {
    /**
     * - The tasks.
     */
    data: Tidy_V1_Task[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Ticket = {
    /**
     * - The ticket.
     */
    data: Tidy_V1_Ticket | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Tickets = {
    /**
     * - The tickets.
     */
    data: Tidy_V1_Ticket[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_SoldTickets = {
    /**
     * - The sold tickets.
     */
    data: Tidy_V1_SoldTicket[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Transaction = {
    /**
     * - The transaction.
     */
    data: Tidy_V1_Transaction | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_Transactions = {
    /**
     * - The transactions.
     */
    data: Tidy_V1_Transaction[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_ShopProduct = {
    /**
     * - The shop product.
     */
    data: Tidy_V1_ShopProduct | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_ShopProducts = {
    /**
     * - The shop products.
     */
    data: Tidy_V1_ShopProduct[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_ShippingOption = {
    /**
     * - The shipping option.
     */
    data: Tidy_V1_ShippingOption | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_ShippingOptions = {
    /**
     * - The shipping options.
     */
    data: Tidy_V1_ShippingOption[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_ShopOrder = {
    /**
     * - The shop order.
     */
    data: Tidy_V1_ShopOrder | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V1_ShopOrders = {
    /**
     * - The shop orders.
     */
    data: Tidy_V1_ShopOrder[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Contact = {
    /**
     * - The contact.
     */
    data: Tidy_V2_Contact | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Contacts = {
    /**
     * - The contacts.
     */
    data: Tidy_V2_Contact[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Membership = {
    /**
     * - The membership.
     */
    data: Tidy_V2_Membership | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Memberships = {
    /**
     * - The memberships.
     */
    data: Tidy_V2_Membership[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Subscription = {
    /**
     * - The subscription.
     */
    data: Tidy_V2_Subscription | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Subscriptions = {
    /**
     * - The subscriptions.
     */
    data: Tidy_V2_Subscription[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type Tidy_V2_SubscriptionPostResponse = {
    /**
     * - The unique identifier for the subscription.
     */
    id: string;
    /**
     * - The state of the subscription.
     */
    state: string;
    /**
     * - Human-readable version of the state.
     */
    status: string;
    /**
     * - The creation date and time of the subscription.
     */
    created_at: string;
    /**
     * - The last update date and time of the subscription.
     */
    updated_at: string;
    /**
     * - The start date of the subscription.
     */
    start_date: string;
    /**
     * - The end date of the subscription.
     */
    end_date: string;
    /**
     * - The ID of the associated membership.
     */
    membership_id: string;
    /**
     * - The variations associated with the subscription.
     */
    variations: Tidy_V2_Variation[];
    /**
     * - When valid, a URL (pre-authed) a user can use to pay for the membership.
     */
    payment_url: string;
    /**
     * - When valid, the ID of the appropriate Invoice to be used with the invoices API.
     */
    invoice_id: string;
    /**
     * - A preview of the membership.
     */
    membership: Tidy_V2_Membership;
};
type TidyAPI_V2_SubscriptionPost = {
    /**
     * - The subscription and membership response.
     */
    data: Tidy_V2_SubscriptionPostResponse | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_MembershipLevel = {
    /**
     * - The membership level.
     */
    data: Tidy_V2_MembershipLevel | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_MembershipLevels = {
    /**
     * - The membership levels.
     */
    data: Tidy_V2_MembershipLevel[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Note = {
    /**
     * - The note.
     */
    data: Tidy_V2_Note | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Organization = {
    /**
     * - The organization.
     */
    data: Tidy_V2_Organization | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_OrganizationRoles = {
    /**
     * - The roles.
     */
    data: Tidy_V2_OrganizationRole[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Webhook = {
    /**
     * - The webhook.
     */
    data: Tidy_V2_Webhook | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
type TidyAPI_V2_Webhooks = {
    /**
     * - The webhooks.
     */
    data: Tidy_V2_Webhook[] | TidyAPI_Data;
    /**
     * - The HTTP status code of the response.
     */
    status: number;
    /**
     * - The status text (e.g., "OK", "Not Found") of the response.
     */
    statusText: string;
    /**
     * - Indicates whether the request was successful.
     */
    success: boolean;
    /**
     * - An optional error message, present only in error responses.
     */
    message?: string | undefined;
};
