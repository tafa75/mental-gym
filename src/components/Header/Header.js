import React from 'react'
import { Link, withRouter } from "react-router-dom"
import '../Header/Header.css';
const Header = () => {
    return (
        <header>
            <div className="banner-container">
                <h1></h1>
                 <nav>
                {/* <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/profile">Signup</Link></li>
                    <li><Link to="/about">Logout</Link></li>
                </ul> */}
        </nav>
                <img src="./media/Logo.png" alt="logo"/>
            </div>
        </header>
    )
}

export default withRouter(Header);