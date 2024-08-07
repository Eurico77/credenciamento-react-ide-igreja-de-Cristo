import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Draw from './pages/Draw';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/draw">Sorteio</NavLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<Draw />} />
      </Routes>
    </Router>
  );
};

export default App;
