import React from 'react'
import {NavLink} from 'react-router-dom'

const Portfolio =()=>(
    <div>
        <h1>My Work</h1>
        <p>Checkout the following things I've done : </p>
        <NavLink to='/portfolio/1'>Item One</NavLink>
        <NavLink to='/portfolio/2'>Item Two</NavLink>
    </div>
);

export default Portfolio;