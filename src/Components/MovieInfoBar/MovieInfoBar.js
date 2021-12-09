import React from "react";
import { calcTime, convertMoney } from '../../helpers';
import {Wrapper, Content} from './MovieInfoBar.style'

const MovieInfoBar = ({time, budget, revenue}) => {

  return(
    <Wrapper>
      <Content>
        <div className='bar'>
          <p>Running time: {calcTime(time)}</p>
        </div>
        <div className='bar'>
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className='bar'>
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  )
}

export default MovieInfoBar
