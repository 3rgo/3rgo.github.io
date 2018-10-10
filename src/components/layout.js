import React from 'react'
import PropTypes from 'prop-types'

import {} from 'cookieconsent'

// FontAwesome icons
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Navigation from '../components/Navigation'
import SEO from '../components/SEO'

import './../scss/index.scss'

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        library.add(faBars, faAngleDoubleDown, faTwitter, faGithub, faLinkedin);
        dom.watch();

        this.state = {
            stickyMenu: false
        }
    }

    getCookie() {
        var match = document.cookie.match(new RegExp('(^| )=([^;]+)'));
        if (match) return match[2];
        return false;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.cookieconsent.initialise({
            palette: {
                popup: {
                    background: "#252525",
                    text: "#ffffff"
                },
                button: {
                    background: "#ffffff",
                    text: "#252525"
                }
            },
            showLink: false,
            theme: "edgeless",
            type: "opt-in",
            content: {
                message: "Ce site utilise des cookies à des fins d'analyse du trafic uniquement.",
                deny: "Refuser",
                allow: "Autoriser"
            },
            onStatusChange: function(status, chosenBefore){
                if(status !== "allow"){
                    window.gaOptout();
                }
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.scrollingElement.scrollTop,
            sticky    = scrollTop > 100;

        if(this.state.stickyMenu !== sticky) {
            this.setState({
              stickyMenu: sticky
            });
        }
    }

    render() {
        return (
            <div>
                <SEO />
                <Navigation sticky={this.state.stickyMenu} />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout