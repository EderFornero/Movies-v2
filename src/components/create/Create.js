import React, { useState } from 'react'

function Create() {

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

        //local storage
        localStorageSave(movieAdded); 
    }


    //local storage
    const localStorageSave = (movieAdded) => { 

        //get elements

        let getElements = JSON.parse(localStorage.getItem("movies"));
        //check array

        if(Array.isArray(getElements)){
            //add element
            getElements.push(movieAdded);
        }else{
            //replace elements + create array
            getElements = [movieAdded]; 
        };

        //save in lS
        localStorage.setItem('movies', JSON.stringify(getElements))

        //return movie

        return movieAdded; 
    };




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
                    type="submit"
                    value="Add" />
            </form>
        </div>
    )
}

export default Create