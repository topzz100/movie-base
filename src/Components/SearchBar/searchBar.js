import React, {useState, useEffect, useRef} from 'react'
import {Wrapper, Content} from './SearchBar.style'
import searchIcon from '../../images/search-icon.svg'

const SearchBar = ({setSearchItem}) => {
 const [search, setSearch] = useState('')
   const initial = useRef(true);

 useEffect(()=> {
   if (initial.current) {
      initial.current = false;
      return;
    }
    
  const timer = setTimeout(() => {
    setSearchItem(search)

  },500)

   return () => clearTimeout(timer)
  
 },[setSearchItem, search])
 
  return (
    <Wrapper>
      <Content>
        <img src = {searchIcon} alt = 'search-icon'/>
        <input type= 'text' placeholder = 'search movie' value= {search} onChange = {e => setSearch(e.currentTarget.value)}/>
      </Content>
    </Wrapper>
  )
}

export default SearchBar