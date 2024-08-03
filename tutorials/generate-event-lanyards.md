For this example, there is a hackathon event, with teams of up to 6 people. Each contact has a ticket and a custom field with their `Hackathon 2024 Team`. A group was automatically populated with all contacts who have purchased a ticket, named `2024-Hackathon`.

Source code for this example can be found [here](https://github.com/s3ansh33p/hackathon24-cards/blob/main/data.js).

This script will get the relevant data, and produce a data file with the team names and members, which can be used to generate lanyards for the event.

First, we need to get the group ID for the `2024-Hackathon` group, so we can get the contacts in that group.

```js
const groups = await THQ.Groups.getGroups({search_terms: "2024-Hackathon"});
const groupId = groups.data[0].id;

const contacts = await THQ.Contacts.getContactsInGroup(groupId);
```

Next, we need to get the custom field ID for the `Hackathon 2024 Team` field to help when getting the team names.

```js
const fields = await THQ.CustomFields.getCustomFields();
const targetField = fields.data.find(field => field.title === "Hackathon 2024 Team");
```

Now we need to get the event ID for the hackathon event, so we can get the tickets for the event. Here we know the start date, so we can get the first event that starts from that date.

```js
const events = await THQ.Events.getEvents({start_at: "2024-07-12"});
const eventId = events.data[0].id;

const tickets = await THQ.Tickets.getSoldTickets(eventId);
```

Now we can combine the data to get the team names and members, and write the data to a file, starting by organizing the contact data.

```js
// Create map with contact ID as key, and name, team, and code as values
const data = contacts.data.reduce((acc, contact) => {
    const team = contact.custom_fields.find(field => field.id === targetField.id);
    acc[contact.id] = {
        name: contact.display_name,
        team: team.value
    };
    return acc;
}, {});

/* FOR EXAMPLE:
{
    1: {
        name: "John Doe",
        team: "Team A"
    },
    2: {
        name: "Jane Doe",
        team: "Team B"
    }
}
*/
```

Now we can add the ticket code to each contact, using the map we created. The ticket code can be used to generate QR codes for the lanyards, which can be scanned to check-in attendees using [TidyHQ Tools](https://tidy.mcginty.io). 

```js
// Add ticket code to each contact
for (const ticket of tickets.data) {
    const contact = data[ticket.contact_id];
    contact.code = ticket.code;
}

/* FOR EXAMPLE:
{
    1: {
        name: "John Doe",
        team: "Team A",
        code: "9c3f9f640806c12ab0b9b11f"
    },
    2: {
        name: "Jane Doe",
        team: "Team B",
        code: "06f6d42e4ab8952b23d5160a"
    }
}
*/
```

Finally, we can group the contacts by team, and write the data to a file.

```js
const teams = Object.values(data).reduce((acc, contact) => {
    const team = acc.find(team => team.name === contact.team);
    if (!team) {
        acc.push({
            name: contact.team,
            members: []
        });
    }
    acc.find(team => team.name === contact.team).members.push({
        name: contact.name,
        code: contact.code
    });
    return acc;
}, []);

/* FOR EXAMPLE:
{
    "teams": [
        {
            "name": "Team A",
            "members": [
                {
                    "name": "John Doe",
                    "code": "9c3f9f640806c12ab0b9b11f"
                }
            ]
        },
        {
            "name": "Team B",
            "members": [
                {
                    "name": "Jane Doe",
                    "code": "06f6d42e4ab8952b23d5160a"
                }
            ]
        }
    ]
}
*/

fs.writeFileSync('data/teams.json', JSON.stringify({teams}));
console.log("Data written to data/teams.json");
```

The data can be extended to include more information, such as other custom fields, or contact details.
Once the data is written to a file, it can be used to generate lanyards for the event, example [source code](https://github.com/s3ansh33p/hackathon24-cards/blob/main/index.js). 

![Example Generated PDF](https://raw.githubusercontent.com/s3ansh33p/hackathon24-cards/main/assets/LanyardPDFExample.png)
![Lanyards on Display](https://raw.githubusercontent.com/s3ansh33p/hackathon24-cards/main/assets/LanyardExample.png)