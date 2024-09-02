import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeContact } from '../caracteristicas/contatos/contatoSlice'
import ContactItem from './ItemDeContato'

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ContactList = ({ onEdit }) => {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeContact(id))
  }

  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      ))}
    </List>
  )
}

export default ContactList
