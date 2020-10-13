import React from 'react'
import { Link, withRouter } from "react-router-dom"

const Header = () => {
    return (
        <headder>
            <div className="banner-container">
                <h1><Link to="/">Mental Gym</Link></h1>
            </div>
        </headder>
    )
}

export default withRouter(Header);