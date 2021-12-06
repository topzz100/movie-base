import {useState, useEffect} from 'react'
import API from '../API.js'

const initialState = {movies: {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0}
};

export const useHomeFetch = () => {
const[searchItem, setSearchItem] = useState('')  
const[state, setState] = useState(initialState)
const[error, setError] = useState(false)
const[loading, setLoading] = useState(true)
const [isLoadingMore, setIsLoadingMore] = useState(false);

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
  setState(initialState)
  fetchMovies(1, searchItem)
}, [searchItem])

 useEffect(() => {

 if (!isLoadingMore) return;

     fetchMovies(state.page + 1, searchItem);
     setIsLoadingMore(false);
   }, [isLoadingMore, searchItem, state.page])
 
return {state, error, loading, searchItem, setSearchItem, setIsLoadingMore};
}