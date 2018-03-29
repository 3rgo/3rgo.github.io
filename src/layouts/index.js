import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Global smooth scrolling
import smoothscroll from 'smoothscroll'

import Navigation from '../components/Navigation'
import SEO from '../components/SEO'

import './../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <SEO />
    <Navigation />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
