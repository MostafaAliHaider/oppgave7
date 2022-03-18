

const Movies = ({movies, setMovies, search}) => {

    const key = "80a2f1ef";
    const url = "http://www.omdbapi.com/?apikey=80a2f1ef&s="

    const handleClick = async () => {
    const response = await fetch( `${url}${search}`);
        const data = await response.json();
        if(response.ok){
            setMovies(data.Search)
        }
        
    }
    return(
    <>
    <h1>Movies</h1>
    
    <button type="button" onClick={handleClick}>I want to see some movies</button>
    </>
    )
}
export default Movies