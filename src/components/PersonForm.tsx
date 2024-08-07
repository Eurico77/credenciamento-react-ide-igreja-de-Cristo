import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 25rem;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

interface PersonFormProps {
  addPerson: (person: { name: string; address: string; phone: string }) => void;
}

const PersonForm: React.FC<PersonFormProps> = ({ addPerson }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && address && phone) {
      addPerson({ name, address, phone });
      setName('');
      setAddress('');
      setPhone('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
      <Input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Endereço"
        required
      />
      <Input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
        required
      />
      <Button type="submit">Credenciar</Button>
    </Form>
  );
};

export default PersonForm;
