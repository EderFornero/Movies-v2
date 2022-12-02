import React from 'react'
import '../../css/style.css'

function SearchEngine() {
    return (
        <div className="search">
            <h3 className="movie-title">Discover</h3>
            <form>
                <input type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchEngine