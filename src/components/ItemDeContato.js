import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`

const Info = styled.div`
  flex-grow: 1;
`

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`

const ContactItem = ({ contact, onDelete, onEdit }) => {
  return (
    <Item>
      <Info>
        <div>
          <strong>Nome:</strong> {contact.name}
        </div>
        <div>
          <strong>Email:</strong> {contact.email}
        </div>
        <div>
          <strong>Telefone:</strong> {contact.phone}
        </div>
      </Info>
      <div>
        <Button onClick={() => onEdit(contact)}>Editar</Button>
        <Button onClick={() => onDelete(contact.id)}>Excluir</Button>
      </div>
    </Item>
  )
}

export default ContactItem
