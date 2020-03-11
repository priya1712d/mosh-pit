'use strict'
import React,{Component} from 'react';


const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                NavBar <span className="badge badge-pill badge-seconday"> {totalCounters} </span>
            </a>
        </nav>
    );
}
export default NavBar;
