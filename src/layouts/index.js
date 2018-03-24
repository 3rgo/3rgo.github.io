import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import SEO from '../components/SEO'

import './../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <SEO />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
