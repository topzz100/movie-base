import React, {useState} from 'react'
import {Wrapper, Content} from './SearchBar.style'
import searchIcon from '../../images/search-icon.svg'

const SearchBar = () => {

  return (
    <Wrapper>
      <Content>
        <img src = {searchIcon} alt = 'search-icon'/>
        <input type= 'text' placeholder = 'search movie'/>
      </Content>
    </Wrapper>
  )
}

export default SearchBar