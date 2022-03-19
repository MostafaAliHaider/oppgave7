import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
import Search from "../components/Search";

const key = "80a2f1ef";
const url = "http://www.omdbapi.com/?apikey=80a2f1ef&s=";

const Main = () => {
  const [search, setSearch] = useState("Star Wars");
  const [movies, setMovies] = useState([]);
  const [limit, setLimit] = useState(true);

  const handleClick = async () => {
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    if (limit) {
      setMovies(data?.Search.slice(0, 5));
      setLimit(false);
    } else {
      setMovies(data?.Search);
    }
  };

  useEffect(() => {
    handleClick();
  }, [search]);

  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center">
      <div>
        <Search
          search={search}
          setSearch={setSearch}
          handleClick={handleClick}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-3 rounded  mt-5">
        
            {movies
              ? movies.map((movie) => {
                  const { imdbID: id, Title, Poster, Year, Type } = movie;
                  return (
                    <Movie
                      key={id}
                      id={id}
                      title={Title}
                      poster={Poster}
                      year={Year}
                      type={Type}
                    />
                  );
                })
              : null}
          
        </div>
      </div>
    </div>
  );
};
export default Main;
