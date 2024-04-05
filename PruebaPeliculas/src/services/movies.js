export function fetchMovies({Search}){
       
    
       return fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${Search}`)
        .then(res => res.json())
        .then(movies => {return movies.Search?.map(e => ({
            id: e.imdbID,
            title: e.Title,
            year : e.Year,
            poster : e.Poster,
            type: e.Type
        
        }))}    )
        
         

        

    }