import React from 'react'
import {Wrapper, Content} from './Header.style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <Wrapper>
      <Content>
    
        <Link to= '/' >
          <h4>movie base</h4>
        </Link>
      </Content>
    </Wrapper>
    
  )
}

export default Header
