import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;

`;
export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 700px;
padding: 0 10px;
background-color: var(--medGrey);
border-radius: 17px;
height: 35px;

  img{
    width: 15px;
  }
  input{
    margin-left: 10px;
    width: 100%;
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.1rem;
    outline: none;
    color: white;
  }
  @media (max-width: 720px){
    width: 95%;
  }
`;