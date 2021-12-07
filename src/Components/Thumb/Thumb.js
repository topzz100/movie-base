import React from 'react'
import {Image} from './Thumb.style'
import {Link} from 'react-router-dom'

const Thumb = ({image, movieId, clickable} ) => {
  return (
    <>
      {clickable?
      (
        <Link to={`/${movieId}`}>
          <Image src = {image} alt = 'movie-thumb'/>
        </Link> 
      ):
      (
         <Image src = {image} alt = 'movie-thumb'/>
      )


      }
        
       
      
    
    </>
    
      
    
  )
}

export default Thumb
