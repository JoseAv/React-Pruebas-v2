import datos from '../json/prueba.json'

export function useMovies(){
const movies = datos.Search
console.log(movies)
const mapmovies = movies?.map(e => ({
    id: e.imdbID,
    title: e.Title,
    year : e.Year,
    poster : e.Poster,
    type: e.Type

}))    


return {movies:mapmovies}

}