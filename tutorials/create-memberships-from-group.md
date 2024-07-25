You may want to give memberships to all contacts in a group. This example creates memberships for a `Paid` group.

First, get the source group by searching for it. In this example, the group named `Paid`.
```js
const groups = await THQ.Groups.getGroups({search_terms: "Paid"});
const groupId = groups.data[0].id; // Get the id of the first group
```

Next, get the contacts in the source group.
```js
const contacts = await THQ.Contacts.getContactsInGroup(groupId);
```

Now that we have our contacts, let's work out what membership level/s we would like to give them. In this example, we have two separate membership levels, `2024 Member` and `2024 Member - Voucher`. Each member also has a custom field with how they paid, although you don't need to have this extra step if you only want to add to one membership level.

The dropdown custom field `Payment Method` has the following options: `Voucher`, `Cash` or `Card`. We will create a map of these values to valid payment methods for TidyHQ (`cash`, `card`, `cheque`, `bank` or `other`).
```js
const paymentMethodMap = {
    "Voucher": "other", // Arguably this is not needed as the fallback value is "other", but it's here for completeness
    "Cash": "cash",
    "Card": "card"
};
```

Let's get the membership levels.
```js
const levels = await THQ.V2.MembershipLevels.getMembershipLevels();
const voucherLevel = levels.data.find(level => level.name === "2024 Member - Voucher");
const otherLevel = levels.data.find(level => level.name === "2024 Member");
```

Now we can loop through the contacts and create memberships for them.
```js
for (let i = 0; i < contacts.data.length; i++) {
    // Get the contact
    const contact = contacts.data[i];

    // Get the payment method from the custom field, default to "other" if not found/set
    const paymentMethod = contact.custom_fields.find(field => field.title === "Payment Method")?.value?.title;
    const tidyPaymentMethod = paymentMethodMap[paymentMethod] || "other";

    // Get the membership level based on the payment method
    const membershipLevel = paymentMethod === "Voucher" ? voucherLevel : otherLevel;

    // Create the membership
    const res = await THQ.V2.MembershipLevels.createMembership(targetLevel.id, {
        member: { contact_id: contact.id },
        payment_type: 'paid',
        payment_method: tidyPaymentMethod,
        send_welcome_email: true // This is true by default, and will queue welcome emails to be sent
    });

    // Log progress
    if (res.success) {
        console.log(`Created membership for contact ${contact.display_name}`);
    } else {
        console.log(`Failed to create membership for contact ${contact.display_name}`);
        console.log(res.data); // Contains the error message from TidyHQ
    }
}
```

Note that creating a membership will take a moment. Also, if the membership is not free, financial transactions will be created.