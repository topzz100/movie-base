import React from 'react'
import Hero from './HeroImage/Hero'
 import Grid from './Grid/Grid'
import Thumb from './Thumb/Thumb' 
import Spinner from './Spinner/Spinner'
import SearchBar from './SearchBar/searchBar'
import Button from './Button/Button'
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config'
import { useHomeFetch } from '../Hooks/useHomeFetch'

import NoImage from '../images/no_image.jpg';


const Home = () => {
const {state, error, loading, searchItem, setSearchItem, setIsLoadingMore} = useHomeFetch()
console.log(state)
// console.log(searchItem);
const {movies} = state

  if (error) return <div>Something went wrong ...</div>;
  return (
    <>
      { !searchItem &&
        movies.results[0] ? 
        <Hero 
          image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`} 
          title = {movies.results[0].original_title} text = {movies.results[0].overview}/> : null
      }
      <SearchBar setSearchItem = {setSearchItem}/>
      <Grid title = {'Popular Movies'}>
        {
          movies.results.map((movie) => {
            return(
              <Thumb
              Key = {movie.id}
              clickable
              image = {
                movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage}
                movieId = {movie.id}
              />
            )
          })
        }
      </Grid>
      {loading && <Spinner/>}
     {state.movies.page < state.movies.total_pages && !loading && (
      <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )} 
      
      
    </>
  )
}

export default Home
