import { useState,useEffect } from "react"
import {getDataMovie} from "./getDataMovie"

export function useMovies(value){
    const [movie,setMovie] = useState()
    
    console.log(movie)
    useEffect(()=>{
      if(!value) return 
    
      
      async function DatosMovies(){
       let data = await getDataMovie(value)
       setMovie(data.Search)
      }
       
      DatosMovies()

    },[value])
    

    return movie

    }


    