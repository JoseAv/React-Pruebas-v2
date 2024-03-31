import './App.css'
import { useState } from 'react'
import {useMovies} from './components/movies'



function App() {
  const [value,setValue]= useState()
  
  
  let movie =  useMovies(value)

  

  function handlesubmit(e){
    e.preventDefault()
    const {input} = Object.fromEntries(new window.FormData(e.target))
    setValue(input)
  }

  return (
    <>
    
    <header className='head'>
    <h1>Peliculas</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" name='input' className='input'  />
        <button   className='botom' type='submit' >Buscar</button>
      </form>
    </header>

    <main className='main'>
    { movie && movie.map(e => {
      return(
          <div className='main-Contenedor' key={e.imdbID}>
            <h3>{e.Title}</h3>
            <h4>{e.Year}</h4>
            <img src={e.Poster} alt="Aqui va una Pelicula llamada de la Api" />
            </div>
            )
      })}
    </main>


    </>
  )
}

export default App
