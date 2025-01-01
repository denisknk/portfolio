// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: #61dafb;
  font-size: 2.5rem;
  text-align: center;
`;

const Home = () => <Title>Home Page</Title>;
const About = () => <Title>About Page</Title>;
const NotFound = () => <Title>404 - Page Not Found</Title>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
