import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import {RenderMovie} from './components/renderMovie'
import {useMovies} from './hooks/useMovies'
import debounce from 'just-debounce-it'

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
const [checkYear, setYear] = useState(false)
const {movies,getMovies}= useMovies({Search,checkYear})


const getRetarMovies= useCallback(

  debounce(Search => {
    console.log('Search',Search)
    getMovies({Search})
},2000)

, [getMovies]
)


function handleSubmit(e){
    e.preventDefault()
    getMovies({Search})
}

function handleChange(e){
  console.log(e.target.value)
  const newSearch = e.target.value
  if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
  getRetarMovies(newSearch)

}



  return (
    <div className='container'>
    
    <h1>Peliculas</h1>
    <form onSubmit={handleSubmit} >
      <input name='datos' type="text"  value={Search} onChange={handleChange} />
      <input type="checkbox" name='peliculas' onChange={()=> setYear(!checkYear)} />
      <button>Buscar</button>
    </form>
    {error ? <p style={{color:'red'}}>{error}</p>: '' }


    <main>
    {
      <RenderMovie movies={movies}/>
    }
    </main>

    </div>
  )
}

export default App
