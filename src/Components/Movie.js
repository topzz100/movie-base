import React from 'react'
import { useParams } from 'react-router-dom';
import Grid from './Grid/Grid'
import Spinner from './Spinner/Spinner'
import MovieHeader from './MovieHeader/MovieHeader'
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
import Actor from './Actor/Actor';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useMovieFetch } from '../Hooks/useMovieFetch'
import NoImage from '../images/no_image.jpg'

const Movie = () => {

  const { movieId } = useParams();
  console.log(movieId)

  const {state : movie, loading, error} = useMovieFetch(movieId)

  console.log(movie)

  if(loading) return <Spinner/>
  if(error) return <div>Somethin gis wrong...</div>

  return (
    <>
      <MovieHeader title = {movie.original_title}/>
      <MovieInfo movie = {movie} />
      <MovieInfoBar 
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}/>
      <Grid title = {'Casts'}>
        {
          movie.actors.map((actor) => {
            return(
              <Actor
                key={actor.credit_id}
                name={actor.name}
                character={actor.character}
                imageSrc={
                actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
              />
            )
          })
        }
      </Grid>  
    </>
  )
}

export default Movie
