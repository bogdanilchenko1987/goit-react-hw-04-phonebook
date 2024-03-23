import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsSection } from './Section/Section';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const LS_KEY = 'cb_key';

const getInitialContacts = () => {
  const savedCB = localStorage.getItem(LS_KEY);
  return savedCB ? JSON.parse(savedCB) : initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(LS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    contacts.some(contact => contact.name === data.name)
      ? alert(`${data.name} is already in your contacts`)
      : setContacts([...contacts, newContact]);
  };

  const deleteContacts = ContactsId => {
    setContacts(contacts.filter(contact => contact.id !== ContactsId));
  };

  const changeFilter = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  const filteredContacts = () => {
    const FilterlowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(FilterlowerCase)
    );
  };

  return (
    <>
      <ContactsSection title="Phonebook">
        <ContactForm addContact={addContact} />
      </ContactsSection>
      <ContactsSection title="Contacts">
        <ContactsFilter changeFilter={changeFilter} value={filter} />
        <ContactList
          filteredContacts={filteredContacts()}
          deleteContacts={deleteContacts}
        />
      </ContactsSection>
    </>
  );
};
