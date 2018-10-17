import React from 'react'
import PropTypes from 'prop-types'
import Helmet from "react-helmet";

// FontAwesome icons
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faBars, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Navigation from '../components/Navigation'
import SEO from '../components/SEO'

import './../scss/index.scss'

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        library.add(faBars, faAngleDoubleDown, faTwitter, faGithub, faLinkedin, faEnvelope, faEnvelopeOpen, faFilePdf);
        dom.watch();

        this.state = {
            stickyMenu: false,
            displayCookieBanner: false
        }
    }

    getCookie() {
        var match = document.cookie.match(new RegExp('(^| )=([^;]+)'));
        if (match) return match[2];
        return false;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {if(window.cookieconsent && !this.state.displayCookieBanner){
            this.setState({displayCookieBanner: true});
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
                law: {
                    regionalLaw: false,
                },
                theme: "edgeless",
                type: "opt-in",
                content: {
                    message: "Ce site utilise des cookies à des fins d'analyse du trafic uniquement.",
                    deny: "Refuser",
                    allow: "OK"
                },
                onStatusChange: function(status, chosenBefore){
                    this.close();
                    if(!this.hasConsented()){
                        if(window.gaOptout){
                            window.gaOptout();
                        }
                        //Delete existing cookies
                        document.cookie = '_ga=; Path=/; Domain=.rgoncalves.fr; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        document.cookie = '_gat=; Path=/; Domain=.rgoncalves.fr; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        document.cookie = '_gid=; Path=/; Domain=.rgoncalves.fr; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    }
                }
            });
        }}, 2000);
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
                <Helmet>
                    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
                    <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
                </Helmet>
            </div>
        )
    }
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout