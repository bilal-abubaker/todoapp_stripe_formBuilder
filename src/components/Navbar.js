import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
            <Link to="/#" className='navbar-brand ml-5'> react redux Contact App
            </Link>
       
        </nav>
    )
}

export default Navbar
