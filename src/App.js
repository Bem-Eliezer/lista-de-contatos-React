import React, { useState } from 'react'
import ContactForm from './components/ContatoForm'
import ContactList from './components/ListaDeContatos'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`

const App = () => {
  const [currentContact, setCurrentContact] = useState(null)

  const handleEdit = (contact) => {
    setCurrentContact(contact)
  }

  const handleSave = () => {
    setCurrentContact(null)
  }

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <ContactForm currentContact={currentContact} onSave={handleSave} />
      <ContactList onEdit={handleEdit} />
    </Container>
  )
}

export default App
