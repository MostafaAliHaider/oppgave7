const Movie = ({ id, title, poster, year, type}) => {
    return (
    <>
    <article >
        <h3>{title}</h3>
        <p> {type} {year}</p>
        <img src = {poster} alt="sorry"></img>
    </article>
    
    </>
    )
}
export default Movie