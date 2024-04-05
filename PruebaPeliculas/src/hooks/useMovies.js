import { useState,useRef, useMemo, useCallback } from 'react'
import {fetchMovies} from  '../services/movies'


export function useMovies({Search,checkYear}){
const [movies,setMovies] = useState([])
const [loading,setloading]= useState(false)
const [error, seterror] = useState(null)
const inputRef = useRef({Search}) // <-- No se vuelve a Renderizar los hooks de react

   
    
     const getMovies=useCallback(({Search})=> { //Solo en funcion Flecha
        if(Search === inputRef.current) return

        try{
        setloading(true)
        seterror(null)
        inputRef.current = Search
        fetchMovies({Search}).then(data => setMovies(data))
    } catch(e) {
        seterror(e)
    } finally{
        setloading(false)
    }
    
    },[])

    
const filterData = useMemo(()=> {
    return checkYear ?
    [...movies].sort((a,b)=> a.year - b.year) :
    movies

},[checkYear,movies])
   

return {movies:filterData,getMovies,loading,error}

}