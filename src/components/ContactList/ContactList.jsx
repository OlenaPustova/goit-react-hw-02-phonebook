import ContactListItem from 'components/ContactListItem/ContactListItem';

import s from './ContactList.module.scss';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
