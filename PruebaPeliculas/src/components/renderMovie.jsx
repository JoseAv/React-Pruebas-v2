
function ResultMovie(movies){
    return(
    <div className="grid">
    {movies.movies.map(e=> (
        <div key={e.id} className="divs">
          <h3>{e.title}</h3>
          <p>{e.year}</p>
          <img src={e.poster} alt="Imagen de busqueda de peliculas API" />
        </div>
      )) }
      </div>
      )
}

function NoResultMovie(){
    return(<p>No se enconto Peliculas</p>)
}

export function RenderMovie(movies){
    const hasmovies = movies.movies?.length > 0

    return(
        hasmovies? 
        
        <ResultMovie movies={movies.movies} />
        :
        <NoResultMovie/>
    )
}

