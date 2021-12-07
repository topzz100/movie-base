import styled from 'styled-components'

export const Wrapper = styled.button`
  margin: 20px auto;
  width: 200px;
  background-color: var(--darkGrey);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
  
`;