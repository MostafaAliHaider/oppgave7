import { useState, useEffect } from "react"
import Movie from "../components/Movie"
import Movies from "../components/Movies"
import Search from "../components/Search"

const key = "80a2f1ef";
const url = "http://www.omdbapi.com/?apikey=80a2f1ef&s="

const Main = () => {

    const [search, setSearch] = useState ("Star Wars")
    const [movies, setMovies] = useState ([])

    const handleClick = async () => {
        const response = await fetch( `${url}${search}`);
            const data = await response.json();
            if(response.ok){
                setMovies(data.Search)
            }
            
        }
    
    useEffect(()=> {
        handleClick();
    }, [search])
   
    return(
    <>
        <Search search={search} setSearch={setSearch} handleClick={handleClick}/>
        
{/*         <Movies movies={movies} setMovies={setMovies} search={search}/>
 */}      
        { movies? movies.map((movie) => {
            const {imdbID : id, Title, Poster, Year, Type}= movie;
            return (
               <Movie key={id} id={id} title={Title} poster={Poster} year={Year} type={Type}/>
               
            )

        }) : null}
    </>
    )
}
export default Main