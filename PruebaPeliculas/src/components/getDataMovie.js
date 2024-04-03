const API_Movies = 'https://www.omdbapi.com/?apikey=4287ad07&s='


export async function getDataMovie(value){

  let res = await  fetch(`${API_Movies}${value}`)
    let json = await res.json()
    return json


}