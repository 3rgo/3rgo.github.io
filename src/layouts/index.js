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
    }

    render() {
        return (
            <div>
                <SEO />
                <Navigation />
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