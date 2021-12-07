import {useState, useEffect} from 'react'
import API from '../API.js'

export const useMovieFetch = (movieId) => {
  const[state, setState] = useState({})
  const[loading, setLoading] = useState(true)
  const[error, setError] = useState(false)

  // useEffect(() => {
  //   const fetchData = async() => {
  //     try{
  //       setLoading(true)
  //       setError(false)
  //       const movie = await API.fetchMovies(movieId)
  //       const credits = await API.fetchCredits(movieId)

  //       const directors = credits.crew.filter(
  //       member => member.job === 'Director'
  //       );

  //       setState({
  //         ...movie,
  //         actors: credits.cast,
  //         directors
  //       });

  //       setLoading(false);
  //     }catch(err){
  //       setError(true)
  //     }
  //   }
  //   fetchData()
  // },[movieId])
  
   useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get directors only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    

    fetchMovie();
  }, [movieId]);

  return{state, loading, error}
}