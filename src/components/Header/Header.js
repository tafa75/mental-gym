import React from 'react'
import { Link, withRouter } from "react-router-dom"
import '../Header/Header.css';
const Header = () => {
    return (
        <header>
            <div className="banner-container">
                <h1>Mental Gym</h1>
            </div>
        </header>
    )
}

export default withRouter(Header);