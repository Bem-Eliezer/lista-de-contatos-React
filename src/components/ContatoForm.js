import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  addContact,
  editContact
} from '../caracteristicas/contatos/contatoSlice'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`

const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`

const ContactForm = ({ currentContact, onSave }) => {
  const [name, setName] = useState(currentContact ? currentContact.name : '')
  const [email, setEmail] = useState(currentContact ? currentContact.email : '')
  const [phone, setPhone] = useState(currentContact ? currentContact.phone : '')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      id: currentContact ? currentContact.id : Date.now(),
      name,
      email,
      phone
    }

    if (currentContact) {
      dispatch(editContact(newContact))
    } else {
      dispatch(addContact(newContact))
    }

    onSave()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">{currentContact ? 'Editar' : 'Adicionar'}</Button>
    </Form>
  )
}

export default ContactForm
