import React from 'react'
import Hero from './HeroImage/Hero'
 import Grid from './Grid/Grid'
import Thumb from './Thumb/Thumb' 
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config'
import { useHomeFetch } from '../Hooks/useHomeFetch'

import NoImage from '../images/no_image.jpg';


const Home = () => {
const {state, error, loading} = useHomeFetch()
console.log(state)
const {movies} = state
  return (
    <>
      {
        movies.results[0] ? 
        <Hero 
          image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`} 
          title = {movies.results[0].original_title} text = {movies.results[0].overview}/> : null
      }
      <Grid title = {'Popular Movies'}>
        {
          movies.results.map((movie) => {
            return(
              <Thumb
              Key = {movie.id}
              image = {
                movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage}
              />
            )
          })
        }
      </Grid>
      
      
    </>
  )
}

export default Home
