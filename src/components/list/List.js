import React, { useEffect } from 'react'

function List({ applyList, setApplyList }) {



    //get local storage run 
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movie"));
        setApplyList(movies);
    }

    return (
        <>

            {applyList != null ?
                applyList.map(movie => {

                    return (
                        <article key={movie.id} className="movie-card">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="desc">{movie.description}</p>

                            <button className="edit">Edit</button>
                            <button className="delete">Delete</button>
                        </article>
                    );
                })
                : <div style={{ width: '100%' }}><h3 style={{ textAling: 'center' }}>ADD SOME MOVIE</h3></div>
            }
        </>
    )
}

export default List