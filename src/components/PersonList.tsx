import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface Person {
  id: number;
  name: string;
  address: string;
  phone: string;
}

interface PersonListProps {
  people: Person[];
}

const PersonList: React.FC<PersonListProps> = ({ people }) => {
  return (
    <List>
      {people.map((person) => (
        <ListItem key={person.id}>
          <strong>Nome:</strong> {person.name} <br />
          <strong>Endereço:</strong> {person.address} <br />
          <strong>Telefone:</strong> {person.phone}
        </ListItem>
      ))}
    </List>
  );
};

export default PersonList;
