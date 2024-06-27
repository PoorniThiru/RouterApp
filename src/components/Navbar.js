import React from "react";
import { Link } from "react-router-dom";
function Navbar()

{
    return(
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>

        </nav>
    )
}
export default Navbar;
