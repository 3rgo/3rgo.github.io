import React from 'react'
import Link from 'gatsby-link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
        let cls = this.props.sticky ? "navbar-shrink" : "";
        return (
            <Navbar light expand="lg" fixed="top" id="mainNav" className={cls}>
                <NavbarBrand href="#page-top">3rgo.me</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="navbar-toggle">
                    Menu&nbsp;
                    <FontAwesomeIcon icon={faBars} fixedWidth/>
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar id="navbarResponsive">
                    <Nav className="navbar-nav ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={this.collapseNavbar} href="#about">&Agrave; propos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.collapseNavbar} href="#technologies">Technologies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.collapseNavbar} href="#experiences">Expériences</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.collapseNavbar} href="#social">Social</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
