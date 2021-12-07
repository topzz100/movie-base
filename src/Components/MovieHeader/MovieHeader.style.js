import styled from "styled-components";

export const Wrapper = styled.div`
background: var(--medGrey);
display: flex;
justify-content: center;
align-items: center;
padding: 10px 50px;
width: 100%;
`;
export const Content = styled.div`
  color: white;
  display: flex;
  width: 100%;

  span{
    font-size: var(--fontMed);
    margin-right: 5px;
    text-transform: capitalize;

    @media(max-width: 720px){
      font-size: var(--fontSmall);
    }
    
  }
  a{
    text-decoration: none;
    color: white;
  }
`;