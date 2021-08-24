
import PropTypes from 'prop-types'
import React,{useState} from 'react';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
   
  

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                        </li> */}

                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <button type="button" class="btn btn-primary mx-1">Primary</button>
                    <button type="button" class="btn btn-secondary mx-1" onClick={props.changesec}>Secondary</button>
                    <button type="button" class="btn btn-success mx-1" onClick={props.changesuc}>Success</button>
                    <button type="button" class="btn btn-danger mx-1">Danger</button>
                    <button type="button" class="btn btn-warning mx-1">Warning</button>
                    <button type="button" class="btn btn-info mx-1">Info</button>
                    <button type="button" class="btn btn-light mx-1">Light</button>
                    <button type="button" class="btn btn-dark mx-1">Dark</button>

                    <button type="button" class="btn btn-link">Link</button>
                    <div className={"form-check form-switch text-light"}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string }