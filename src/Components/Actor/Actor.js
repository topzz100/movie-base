import React from'react'
import {Wrapper, Image} from './Actor.style'

const Actor = ({name, character, imageSrc}) => {
 return(
    <Wrapper>
      <Image src={imageSrc} alt='actor-thumb' />
      <h3>{name}</h3>
      <p>{character}</p>
   </Wrapper>
 ) 
}
export default Actor