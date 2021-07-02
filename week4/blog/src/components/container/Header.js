import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className='links'>
            <Link to="/Home">Blog</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>

        </div>
    )
}
export default Header;