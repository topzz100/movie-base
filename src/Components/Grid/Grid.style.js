import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;

  h1{
    font-size: var(--fontSuperBig);
    text-align: center;

       @media screen and (max-width: 720px){
     font-size: var(--fontBig);
  }
  }

`;

export const Content = styled.div`
  padding: 0 100px ;
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 720px){
    padding: 0 20px;
  }

`;