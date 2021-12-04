import styled from "styled-components";

export const Wrapper = styled.div`
  background:  url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  height: 600px;
  position: relative;
  width: 100%;
`;
export const Content = styled.div`
  padding: 0 20px

`;
export const Text = styled.div`
  color: white;
  position: absolute;
  bottom: 40px;
  left: 20px;
    h1{
      font-size: var(--fontBig);
    }
    p{
      font-size: var(--fontMed);
    }

`;