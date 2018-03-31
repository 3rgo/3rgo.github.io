import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Global smooth scrolling
import smoothscroll from 'smoothscroll'

import Navigation from '../components/Navigation'
import SEO from '../components/SEO'

import './../scss/index.scss'

class TemplateWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            stickyMenu: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.scrollingElement.scrollTop,
            sticky    = scrollTop > 100;

        console.log("Sticky : ", sticky, scrollTop);

        this.setState({
          stickyMenu: sticky
        });
    }

    render() {
        return (
            <div>
                <SEO />
                <Navigation sticky={this.state.stickyMenu} />
                <div>
                    {this.props.children()}
                </div>
            </div>
        )
    }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper