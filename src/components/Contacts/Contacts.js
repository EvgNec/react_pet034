import React from 'react'
import './Contacts.scss';

export default function Contacts({contacts, onDelete}) {
  return (
          <ul className="Contacts__list">
      {contacts.map(contacts => (
        <li key={contacts.id} className="Contacts__contact">
          <p>{contacts.name}</p>
          <p>{contacts.number}</p>
          <button className="Contacts__button" type="button" onClick={() => onDelete(contacts.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

