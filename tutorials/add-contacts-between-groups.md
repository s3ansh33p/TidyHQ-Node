You may want to add contacts from one group to another group. Consider an example where you have a group named `Paid` and you want to add all contacts from this group to another group named `2024 Members`. This can be done by following these steps:

First, get the source group by searching for it. In this example, the group named `Paid`.
```js
const groups = await THQ.Groups.getGroups({search_terms: "Paid"});
const groupId = groups.data[0].id; // Get the id of the first group
```

Next, get the contacts in the source group.
```js
const contacts = await THQ.Contacts.getContactsInGroup(groupId);
```

Similarly to the source group, get the target group by searching for it, here searching for the group named `2024 Members`.
```js
const targetGroups = await THQ.Groups.getGroups({search_terms: "2024 Members"});
const targetGroupId = targetGroups.data[0].id;
```

Finally, add the contacts from the source group to the target group, and log progress.
```js
for (let i = 0; i < contacts.data.length; i++) {
    const contact = contacts.data[i]; // Contact from source group
    await THQ.Groups.addContactToGroup(targetGroupId, contact.id);
    console.log(`Added contact ${contact.display_name} to group`);
}
```