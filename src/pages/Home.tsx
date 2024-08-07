import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import { getPeople, savePeople } from '../utils/storage';

const Container = styled.div`
  padding: 2rem;
  max-width: 37.5rem;
  margin: auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const Counter = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;

interface Person {
  id: number;
  name: string;
  address: string;
  phone: string;
}

const Home: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const storedPeople = getPeople();
    if (storedPeople) {
      setPeople(storedPeople);
    }
  }, []);

  const addPerson = (person: Omit<Person, 'id'>) => {
    const newPerson = { ...person, id: people.length + 1 };
    const updatedPeople = [...people, newPerson];
    setPeople(updatedPeople);
    savePeople(updatedPeople);
  };

  return (
    <Container>
      <Title>Credenciamento</Title>
      <PersonForm addPerson={addPerson} />
      <PersonList people={people} />
      <Counter>Total de pessoas credenciadas: {people.length}</Counter>
    </Container>
  );
};

export default Home;
