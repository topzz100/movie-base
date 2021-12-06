import React from 'react'
import { Wrapper } from '../SearchBar/SearchBar.style'

const Button = ({text, callback}) => {

  return (
    <Wrapper onClick = {callback}>
      {text}
    </Wrapper>
  )
}

export default Button
