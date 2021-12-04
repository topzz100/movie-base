import React from 'react'
import{Wrapper, Content} from './Grid.style'

const Grid = ({title, children}) => {


  return (
  <>
    <Wrapper>
      <h1>{title}</h1>
      <Content>{children}</Content>
    </Wrapper>
  </>

  )
}
export default Grid;