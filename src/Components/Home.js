import React from 'react'
import Hero from './HeroImage/Hero'
 import Grid from './Grid/Grid'
import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../config'
import { useHomeFetch } from '../Hooks/useHomeFetch'


const Home = () => {
const {state, error, loading} = useHomeFetch()
console.log(state)

  return (
    <>
      {
        state.movies.results[0] ? 
        <Hero 
          image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.movies.results[0].backdrop_path}`} 
          title = {state.movies.results[0].original_title} text = {state.movies.results[0].overview}/> : null
      }
      <Grid >

      </Grid>
      
      
    </>
  )
}

export default Home
