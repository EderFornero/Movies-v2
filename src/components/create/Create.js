import React, { useState } from 'react'
import { helperStorage } from '../../helpers/helperStorage';
import '../../css/style.css'

function Create({ setApplyList }) {

    const title = "Add Movie";

    const [movie, setMovie] = useState({
        title: '',
        description: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //movie added
        let movieAdded = {
            id: new Date().getTime(),
            title,
            description,
        };

        //saving movie added
        setMovie(movieAdded);

        //refresh list in view
        setApplyList(elements => { 
            if(!elements){
                return [movieAdded]
            }else{
                return [movieAdded, ...elements];
            }
            
        });
        
        //local storage
        helperStorage("movie", movieAdded);


    }







    return (
        <div className="add">
            <h3 className="movie-title">{title}</h3>
            {(movie.title && movie.description) && "Movie added is: " + movie.title}
            <form onSubmit={onSubmit}>
                <input
                    id="title"
                    type="text"
                    placeholder="Movie name"
                    name="title" />
                <textarea
                    id="description"
                    placeholder="Description"
                    name="description" />
                <input
                    id="save"
                    className='edit-submit'
                    type="submit"
                    value="Add" />
            </form>
        </div>
    )
}

export default Create