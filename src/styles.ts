import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 100vh;
  transition: all 0.3s ease;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  border-radius: 5px;
`;
