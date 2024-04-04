import { useState,useRef } from 'react'
export function useMovies({Search}){

const [movies,setMovies] = useState([])
const inputRef = useRef({Search})


console.log(movies)
const mapmovies = movies?.map(e => ({
    id: e.imdbID,
    title: e.Title,
    year : e.Year,
    poster : e.Poster,
    type: e.Type

}))    

function getMovies(){
    if(Search === inputRef.current) return
    
    
    console.log('entra aqui')
        fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${Search}`)
        .then(res => res.json())
        .then(data => setMovies(data.Search))
}


return {movies:mapmovies,getMovies}

}