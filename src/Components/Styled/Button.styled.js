import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 32px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px 30px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
