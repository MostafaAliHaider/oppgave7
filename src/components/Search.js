
const Search = ({ handleClick, search, setSearch}) => {

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    return (
   
    <>
    <h1 className="text-6xl mb-2">Movies For Free</h1>
    <form className="border-2 border-indigo-400 max-w-sm">
        <label className="mr-2 " htmlFor="search">Search Movie</label>
        <input type="text" id="search" onChange={handleChange} value={search}/>
        <button type="button" onClick={handleClick} className="ml-2 border-solid hover:border-dotted border-2 border-sky-50" >Search</button>
        
    </form>
    </>
    )
}
export default Search