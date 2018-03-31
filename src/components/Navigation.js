import React from 'react'
import Link from 'gatsby-link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Scrollspy from 'react-scrollspy'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

export default class Navigation extends React.Component {

    constructor(props){
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.collapseNavbar = this.collapseNavbar.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggleNavbar(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    collapseNavbar(){
        this.setState({
            isOpen: false
        });
    }

    render() {
        let cls = this.props.sticky ? "navbar-shrink" : ""
        let links = {
            'about' : 'À propos',
            'technologies' : 'Technologies',
            'experiences' : 'Expériences',
            'social' : 'Social'
        }
        let collapseNavbar = this.collapseNavbar

        return (
            <Navbar light expand="lg" fixed="top" id="mainNav" className={cls}>
                <NavbarBrand href="#page-top">3rgo.me</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="navbar-toggle">
                    Menu&nbsp;
                    <FontAwesomeIcon icon={faBars} fixedWidth/>
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar id="navbarResponsive">
                    <Scrollspy items={ Object.keys(links) } currentClassName="active" componentTag={Nav} className="navbar-nav ml-auto" navbar>
                        {
                            Object.keys(links).map(hash => (
                                <NavItem>
                                    <NavLink onClick={collapseNavbar} href={"#" + hash}>{links[hash]}</NavLink>
                                </NavItem>
                            ))
                        }
                    </Scrollspy>
                </Collapse>
            </Navbar>
        )
    }
}
