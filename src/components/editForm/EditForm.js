import React from 'react';
import '../../css/style.css';


function editForm({ movie, getMovies }) {

    const handleOnSubmit = (e, id) => {
        e.preventDefault(); 

        let target = e.target; 

        //get movies
        const existingMovies = getMovies();
        //get id for replace
        const movieIndex = existingMovies.findIndex(movie => movie.id === id);
        //create object
        let movieUpdate = { 
            id,
            title: target.title.value,
            description: target.description.value, 
        }
        
        //refresh element
        existingMovies[movieIndex] = movieUpdate; 
        
        //save new object in localStorage
    }   


    const editTitle = "Edit Movie";

    return (
        <div className='edit-form'>

            <h3 className='edit-title'>{editTitle}</h3>

            <form onSubmit={e => handleOnSubmit(e, movie.id)}>
                <input type="text"
                    name="title"
                    className='edited-title'
                    defaultValue={movie.title} />
                <textarea
                    name='description'
                    defaultValue={movie.description}
                    className='edited-description' />
                <input
                    type="submit"
                    className='edit-submit'
                    value="Refresh" />
            </form>
        </div>
    )
}

export default editForm