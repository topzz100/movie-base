import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
 background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size  : cover;
  background-position: center;
  width: 100%;
  /* height: 80vh; */
  padding: 20px 150px;
  @media(max-width: 1060px){
    padding: 20px 50px;
  }
  @media(max-width:720px){
    padding: 20px 50px;
  }
   @media(max-width:720px){
     padding: 20px;
   }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  height: 100%;

  @media(max-width:720px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
   
`;
export const Text = styled.div`
    width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

    h3{
      margin-top: 10px;
    }

  @media(max-width:500px){
    padding: 20px 10px;
  }

  .rating-directors {
    display: flex;
    justify-content: flex-start;
    margin: 20px 0;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;