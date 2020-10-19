import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
        </nav>
        )
    }
}


export default Nav;