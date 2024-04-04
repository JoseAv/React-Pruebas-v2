import { useEffect, useRef, useState } from 'react'
import './App.css'
import {RenderMovie} from './components/renderMovie'
import {useMovies} from './hooks/useMovies'

function useValidateSearch(){

const [Search, setSearch]= useState('')
const [error,setError] = useState('')
const firsInput = useRef(true)

  useEffect(()=>{

    if(firsInput.current){
      firsInput.current = Search === '' // Search === '' devolvera true o false es una comparacion
      return
    }
  
    if(Search === ''){
      setError('Debe de Ingresar un caracter')
      return 
    }
  
    if(Search.length < 3){
      setError('Ingrese mas de 3 caracteres')
      return 
    }
  
    setError('')
  
    

  },[Search])

  return {Search,setSearch,error}
}


function App() {
const {Search,setSearch,error} = useValidateSearch()
const {movies,getMovies}= useMovies({Search})



function handleSubmit(e){
    e.preventDefault()
    getMovies()
}

function handleChange(e){
  const datos = e.target.value
  setSearch(datos)

}




  return (
    <>
    
    <h1>Peliculas</h1>
    <form onSubmit={handleSubmit} >
      <input name='datos' type="text"  value={Search} onChange={handleChange} />
      <button>Buscar</button>
    </form>
    {error ? <p style={{color:'red'}}>{error}</p>: '' }


    <main>
    {
      <RenderMovie movies={movies}/>
    }
    </main>

    </>
  )
}

export default App
