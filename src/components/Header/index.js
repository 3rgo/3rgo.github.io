import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">3rgo.me</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">&Agrave; propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#technologies">Technologies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#experiences">Expériences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#social">Social</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header
