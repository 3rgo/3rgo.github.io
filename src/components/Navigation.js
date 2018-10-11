import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import Scrollspy from 'react-scrollspy'

import smoothscroll from 'smoothscroll'

import config from '../utils/config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Navigation extends React.Component {

    constructor(props){
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggleNavbar(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLinkClick(event){
        // Collapse navbar
        this.setState({
            isOpen: false
        });

        if(this.props.minimal){ return true; }

        const targetId = event.target.id.split('-').pop();
        const scrollDestination = document.querySelector("#" + targetId);

        event.preventDefault();
        smoothscroll(scrollDestination);
    }

    render() {
        let cls = (this.props.sticky || this.props.minimal) ? "navbar-shrink" : ""
        let links = this.props.minimal ?
            {'home' : 'Accueil'} :
            {
                'about' : 'À propos',
                'technologies' : 'Technologies',
                'experiences' : 'Expériences',
                'training' : 'Formation & Langues',
                'contact' : 'Contact'
            };

        return (
            <Navbar light expand="lg" fixed="top" id="mainNav" className={cls}>
                <NavbarBrand href={this.props.minimal ? "/" : "#pagetop"} onClick={this.handleLinkClick} id="linkto-pagetop">{config.siteTitle}</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="navbar-toggle">
                    Menu&nbsp;
                    <FontAwesomeIcon icon="bars" fixedWidth/>
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar id="navbarResponsive">
                    <Scrollspy items={ Object.keys(links) } currentClassName="active" componentTag="Nav" className="navbar-nav ml-auto">
                        {
                            Object.keys(links).map((hash, hashIdx) => (
                                <NavItem key={hashIdx} tag="div">
                                    <NavLink onClick={this.handleLinkClick} id={"linkto-" + hash } href={this.props.minimal ? "/" : "#" + hash}>{links[hash]}</NavLink>
                                </NavItem>
                            ))
                        }
                    </Scrollspy>
                </Collapse>
            </Navbar>
        )
    }
}
