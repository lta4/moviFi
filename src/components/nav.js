import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <h1 className="navBar">MoviFi</h1>
            <Link to="/">
                <div className="fav">Fav</div>
            </Link>
        </div>
    );
};

export default Nav