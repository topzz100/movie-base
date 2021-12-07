import React from 'react'
import {Wrapper, Content} from './MovieInfo.style'

const MovieInfo = ({movie}) => {

  return (
    <Wrapper backdrop = {movie.backdrop_path} >
      <Content>

      </Content>
    </Wrapper>
  )
}
export default MovieInfo