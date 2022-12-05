import React, { useEffect, useState } from 'react'

//components
import EditForm from '../editForm/EditForm';

function List({ applyList, setApplyList }) {

    //edit button state
    const [editButton, setEditButton] = useState(0);


    //get local storage run 
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movie"));
        setApplyList(movies);
        return movies;
    }

    //delete function
    const movieDeleted = (id) => {
        //get movies
        let getMoviesDeleted = getMovies();
        //filter movies
        let newMoviesArray = getMoviesDeleted.filter(movie => movie.id !== parseInt(id));
        //refresh state 
        setApplyList(newMoviesArray);
        //refresh localStorage
        localStorage.setItem('movie', JSON.stringify(newMoviesArray));
    }



    return (
        <>

            {applyList != null ?
                applyList.map(movie => {

                    return (
                        <article key={movie.id} className="movie-card">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="desc">{movie.description}</p>

                            <button className="edit" onClick={() => { setEditButton(movie.id) }}>Edit</button>

                            <button className="delete" onClick={() => movieDeleted(movie.id)}>Delete</button>
                            {/*spawn form edit*/}
                            {editButton === movie.id && (<EditForm movie={movie}
                                                                   getMovies={getMovies} 
                                                                   setEditButton={setEditButton}
                                                                   setApplyList={setApplyList}
                                                        />)}


                        </article>
                    );
                })
                : <div style={{ width: '100%' }}><h3 style={{ textAling: 'center' }}>ADD SOME MOVIE</h3></div>
            }
        </>
    )
}

export default List