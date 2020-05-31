// src/components/ContactList.js
import React from "react";
import Contact from "./Contact.js";

const users = [
  {
    id: "0",
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false,
  },
  {
    id: "1",
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: false,
  },
  {
    id: "2",
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true,
  },
  {
    id: "3",
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false,
  },
  {
    id: "4",
    name: "June Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true,
  },
  {
    id: "5",
    name: "Olivia Witt",
    avatar: "https://randomuser.me/api/portraits/women/77.jpg",
    online: true,
  },

  {
    id: "6",
    name: "Maria Black",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    online: true,
  },
  {
    id: "7",
    name: "Peter Green",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    online: false,
  },
  {
    id: "8",
    name: "James Cho",
    avatar: "https://randomuser.me/api/portraits/men/98.jpg",
    online: true,
  },
];
const ContactList = () => (
  <div>
    <h3>My contacts</h3>
    {users.map((item) => (
      <Contact
        key={item.id}
        name={item.name}
        image={item.avatar}
        online={item.online}
      />
    ))}
  </div>
);

export default ContactList;
