import s from './ContactListItem.module.scss';

function ContactListItem({ contact, onDeleteContact }) {
  const { name, number } = contact;
  return (
    <li className={s.item}>
      <p>
        {name}: {number}
        <button
          className={s.btn}
          onClick={() => onDeleteContact(contact.id)}
          type="button"
        >
          Delete
        </button>
      </p>
    </li>
  );
}

export default ContactListItem;
