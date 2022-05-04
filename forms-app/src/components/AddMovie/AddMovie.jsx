import { useState } from "react"

const AddMovie = ({ insertMovie }) => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [IMDBRating, setRating] = useState(0)
    const [hasOscars, setHasOscars] = useState(false)

    const handleTitleInput = (e) => setTitle(e.target.value)
    const handleDirectorInput = (e) => setDirector(e.target.value)
    const handleRatingInput = (e) => setRating(e.target.value)
    const handleOscarsInput = (e) => setHasOscars(e.target.checked)

    const handleMovieSubmit = (e) => {

        e.preventDefault()

        const movie = { title, director, IMDBRating, hasOscars }
        insertMovie(movie)

        setTitle('')
        setDirector('')
        setRating(0)
        setHasOscars(false)
    }

    return (

        <div className="AddMovie">

            <h4>Add a Movie</h4>

            <form onSubmit={handleMovieSubmit}>
                <label>Title: </label>
                <input type="text" value={title} onChange={handleTitleInput} />

                <label>Director: </label>
                <input type="text" value={director} onChange={handleDirectorInput} />

                <label>IMDB Rating: </label>
                <input type="number" value={IMDBRating} onChange={handleRatingInput} />

                <label>Won Oscars: </label>
                <input type="checkbox" checked={hasOscars} onChange={handleOscarsInput} />

                <button type="submit">Add a Movie</button>
            </form>
        </div>
    )
}

export default AddMovie