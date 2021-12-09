import styled from 'styled-components'

  export const Wrapper = styled.div`
   background-color:  var( --darkGrey);
   width: 100%;
  
  `;
  export const Content = styled.div`
    padding: 20px 50px;
      @media(max-width: 720px){
        padding: 20px;
      }
      
      a{
        text-decoration: none;
      }
     h4{
       color: white;
       text-transform: uppercase;
     }
  `;