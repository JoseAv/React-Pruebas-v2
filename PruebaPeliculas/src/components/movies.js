import { useEffect, useState } from 'react'
const API_Movies = 'https://www.omdbapi.com/?apikey=4287ad07&s='

export function useMovies(value){
    const [movie,setMovie] = useState()
    

    useEffect(()=>{
      if(!value) return 
    
      
   
        fetch(`${API_Movies}${value}`)
      .then(res => res.json())
      .then(data => setMovie(data.Search))
        console.log(movie)
    

    },[value])

    return movie

    }


    