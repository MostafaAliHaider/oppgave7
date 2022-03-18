import { useState } from "react"
import Movie from "../components/Movie"
import Movies from "../components/Movies"
import Search from "../components/Search"

const Main = () => {

    const [search, setSearch] = useState ("Star Wars")
    const [movies, setMovies] = useState ([])
   
    return(
    <>
        <Search search={search} setSearch={setSearch}/>
        <Movie movie={movies} />
        <Movies movies={movies} setMovies={setMovies} search={search}/>
    </>
    )
}
export default Main