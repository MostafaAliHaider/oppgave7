
const Search = ({ handleClick, search, setSearch}) => {

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    return (
   
    <>
    <h1>Search</h1>
    <form>
        <label htmlFor="search">Search Movie</label>
        <input type="text" id="search" onChange={handleChange} value={search}/>
        <button type="button" onClick={handleClick} >Search</button>
        
    </form>
    </>
    )
}
export default Search