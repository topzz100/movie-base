import React from 'react'
import { Link } from 'react-router-dom'
import {Wrapper, Content} from './MovieHeader.style'

const MovieHeader = ({title}) => {
  return(
    <Wrapper>
      <Content>
        <span>
          <Link to = '/'>Home</Link>
        </span>
        <span> | </span>
        <span>{title}</span>
      </Content>
    </Wrapper>
  )
}

export default MovieHeader