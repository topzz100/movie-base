import React from 'react'
import { useParams } from 'react-router-dom';
import Grid from './Grid/Grid'
import Thumb from './Thumb/Thumb' 
import Spinner from './Spinner/Spinner'
import MovieHeader from './MovieHeader/MovieHeader'
import MovieInfo from './MovieInfo/MovieInfo';
import { useMovieFetch } from '../Hooks/useMovieFetch'

const Movie = () => {

  const { movieId } = useParams();
  console.log(movieId)

  const {state : movie, loading, error} = useMovieFetch(movieId)

  console.log(movie)

  if(loading) return <Spinner/>

  return (
    <>
      <MovieHeader title = {movie.original_title}/>
      <MovieInfo movie = {movie} />
    </>
  )
}

export default Movie
