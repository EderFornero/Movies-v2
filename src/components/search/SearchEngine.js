import React, { useState } from 'react'
import '../../css/style.css'

function SearchEngine({ applyList, setApplyList }) {

    const [search, setSearch] = useState('');
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (e) => {
        //set state
        setSearch(e.target.value);

        //filter list
        let newArrayMoviesFound = applyList.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        })

        //if the search isnt specific show the list with all movies
        if (search.length <= 1 || newArrayMoviesFound <= 0) {
            newArrayMoviesFound = JSON.parse(localStorage.getItem('movie'));
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        //refresh list with movie searched
        setApplyList(newArrayMoviesFound);
    }

    return (
        <div className="search">
            <h3 className="movie-title">Discover: {search}</h3>
            {(notFound === true && search.length > 2)
                &&
                (<span className='not-found'>Movie not found</span>)}
            <form>
                <input type="text"
                    id="searchMovie"
                    name='search'
                    autoComplete='off'
                    onChange={searchMovie}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchEngine