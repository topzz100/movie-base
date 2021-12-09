import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  width: 100%;
  justify-content: center;
  align-items: center;
  padding:  20px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media(max-width:720px){
    flex-direction: column;
  }
    
  .bar {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin:  10px 20px;
    padding: 10px;
    flex: 1;

    p{
      color: white;
    }
  }
`;