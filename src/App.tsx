import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { AppContainer, Button } from './styles.ts';
import { darkTheme, lightTheme } from './themes/themes.ts';

// import { ThemeProps } from 'styled-components';

const Title = styled.h1`
  color: #61dafb;
  font-size: 2.5rem;
  text-align: center;
`;

const Home = () => <Title>Home Page</Title>;
const About = () => <Title>About Page</Title>;
const NotFound = () => <Title>404 - Page Not Found</Title>;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <h1>Light / Dark Mode</h1>
        <Button onClick={toggleTheme}>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</Button>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
