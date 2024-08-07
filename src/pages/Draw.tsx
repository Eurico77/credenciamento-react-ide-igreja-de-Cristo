import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPeople, savePeople } from '../utils/storage';

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Winner = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Counter = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

interface Person {
  id: number;
  name: string;
  address: string;
  phone: string;
}

const Draw: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [winner, setWinner] = useState<Person | null>(null);

  useEffect(() => {
    const storedPeople = getPeople();
    if (storedPeople) {
      setPeople(storedPeople);
    }
  }, []);

  const drawPerson = () => {
    if (people.length === 0) return;
    const randomIndex = Math.floor(Math.random() * people.length);
    const newPeople = [...people];
    const [drawnPerson] = newPeople.splice(randomIndex, 1);
    setWinner(drawnPerson);
    setPeople(newPeople);
    savePeople(newPeople);
  };

  return (
    <Container>
      <Title>Sorteio</Title>
      {winner && (
        <Winner>
          <h2>Vencedor: {winner.name}</h2>
          <p>Endereço: {winner.address}</p>
          <p>Telefone: {winner.phone}</p>
        </Winner>
      )}
      <Button onClick={drawPerson}>Sortear</Button>
      <Counter>Total de pessoas restantes: {people.length}</Counter>
    </Container>
  );
};

export default Draw;
