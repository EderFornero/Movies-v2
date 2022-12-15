import React from 'react'

//router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//pages
import { Home } from '../../components/pages/Home'
import { Movies } from '../pages/Movies'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'


function ReactRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='movies' element={<Movies />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={
                    <>
                        <h1>Error 404</h1>
                        <h2>Page not found</h2>
                    </>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;