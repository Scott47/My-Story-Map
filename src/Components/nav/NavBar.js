import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="any navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/createboard">Create Story Map</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stories">Story Maps</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mystories">My Story Maps</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar