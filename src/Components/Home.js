import {useState, useEffect} from 'react'
import API from '../API.js'

const Home = () => {
const[state, setState] = useState()
const[error, setError] = useState()
const[loading, setLoading] = useState(true)

const fetchMovies = async(page, searchTerm = "" ) => {
  try{
    setLoading(true)
   const movies = await API.fetchMovies(searchTerm, page )
   
   setState(prev => ({
        ...prev,
        movies: {
          ...movies,
          results:
            page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results]
        },
        loading: false
      }));
      
  }catch(error){
    setError(error)
  }
  console.log(state)
}

useEffect(() => {
  setLoading(false)
  fetchMovies(1)
}, [])

  return (
    <div>
      
    </div>
  )
}

export default Home
