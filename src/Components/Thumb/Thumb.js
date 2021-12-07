import React from 'react'
import {Image} from './Thumb.style'
import {Link} from 'react-router-dom'

const Thumb = ({image, movieId} ) => {
  return (
    <>
      
        <Link to = {`/:${movieId}`}>
          <Image src = {image} alt = 'movie-thumb'/>
        </Link>  
       
      
    
    </>
    
      
    
  )
}

export default Thumb
