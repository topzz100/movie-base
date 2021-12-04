import {useState, useEffect} from 'react'
import API from '../API.js'

export const useHomeFetch = () => {
const[state, setState] = useState()
const[error, setError] = useState(false)
const[loading, setLoading] = useState(true)

const fetchMovies = async(page, searchTerm = "" ) => {
  try{
    setLoading(true)
    setError(false)
   const movies = await API.fetchMovies(searchTerm, page )
   
   setState(prev => ({
        ...prev,
        movies: {
          ...movies,
          results:
            page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results]
        }
      }));
      
  }catch(error){
    setError(true)
  }

setLoading(false)
}

useEffect(() => {
  setLoading(false)
  fetchMovies(1)
}, [])
 
return {state, error, loading};
}