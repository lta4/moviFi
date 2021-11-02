import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="navBar">
            <Link to="/">
                <h1 className="title">MoviFi</h1>
            </Link>
            <Link to="/fav">
                <div className="favLink">Fav</div>
            </Link>
            <Link to="/about">
                <div className="aboutLink">About</div>
            </Link>
            <Link to="/review">
                <div className="reviewLink">Review</div>
            </Link>
        </div>
    );
};

export default Nav