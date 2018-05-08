import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDoubleDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'

import config from "../utils/config"


const IndexPage = () => (
    <div>
        <div className="intro">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="brand-heading">{ config.siteTitle }</h1>
                            <p className="intro-text">{ config.siteDescription }</p>
                            <a href="#about" className="btn btn-circle js-scroll-trigger">

                                <FontAwesomeIcon icon={faAngleDoubleDown} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="about" className="content-section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>&Agrave; propos de moi</h2>
                        { config.content.about.map ((sentence, stcIdx) => (<p key={stcIdx}>{sentence}</p>))}
                    </div>
                </div>
            </div>
        </section>
        <section id="technologies" className="content-section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Technologies</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <ul className="list-unstyled">
                                  <li className="media">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                  <li className="media my-4">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                  <li className="media">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-unstyled">
                                  <li className="media">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                  <li className="media my-4">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                  <li className="media">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-unstyled">
                                  <li className="media">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                  <li className="media my-4">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                  <li className="media">
                                    <img className="mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">List-based media object</h5>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section id="experiences" className="content-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Exp&eacute;riences</h2>
                        <div className="media">
                            <img className="align-self-start mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                            <div className="media-body">
                                <h5><strong>2016 - 2018</strong>&nbsp;Lorem ipsum aliqua quis nulla.</h5>
                                <p className="lead">Fugiat esse ut enim quis reprehenderit in anim minim labore aliqua consectetur reprehenderit.</p>
                                <p>Irure in ex ut in pariatur amet aliqua tempor in commodo sint officia exercitation exercitation elit aliqua occaecat sit et qui in fugiat amet aliquip enim cillum non commodo cupidatat ex mollit sunt dolor sit consequat voluptate esse sint eu amet nisi velit ullamco dolor amet consequat ad non sed voluptate culpa voluptate cupidatat veniam mollit eu qui in anim officia cupidatat sed esse amet in ut dolor mollit aliqua do anim ut proident aliqua est elit reprehenderit deserunt ea do ad cupidatat magna dolore id commodo excepteur incididunt irure in duis voluptate mollit dolore enim aliquip eu occaecat eiusmod cupidatat fugiat minim nulla aute mollit dolor amet aliqua velit nulla consequat officia eu ullamco elit..</p>
                                <h6>Technologies</h6>
                                <dl className="row">
                                    <dt className="col-sm-3">Lorem ipsum.</dt>
                                    <dd className="col-sm-9">
                                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                        <p>Donec id elit non mi porta gravida at eget metus.</p>
                                    </dd>
                                    <dt className="col-sm-3">Lorem ipsum.</dt>
                                    <dd className="col-sm-9">
                                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                        <p>Donec id elit non mi porta gravida at eget metus.</p>
                                    </dd>
                                    <dt className="col-sm-3">Lorem ipsum.</dt>
                                    <dd className="col-sm-9">
                                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                        <p>Donec id elit non mi porta gravida at eget metus.</p>
                                    </dd>
                                    <dt className="col-sm-3">Lorem ipsum.</dt>
                                    <dd className="col-sm-9">
                                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                        <p>Donec id elit non mi porta gravida at eget metus.</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="media">
                            <img className="align-self-start mr-3" src="http://via.placeholder.com/150" alt="Generic placeholder image"/>
                            <div className="media-body">
                                <h5><strong>2014 - 2016</strong>&nbsp;Lorem ipsum aliqua quis nulla.</h5>
                                <p className="lead">Fugiat esse ut enim quis reprehenderit in anim minim labore aliqua consectetur reprehenderit.</p>
                                <p>Irure in ex ut in pariatur amet aliqua tempor in commodo sint officia exercitation exercitation elit aliqua occaecat sit et qui in fugiat amet aliquip enim cillum non commodo cupidatat ex mollit sunt dolor sit consequat voluptate esse sint eu amet nisi velit ullamco dolor amet consequat ad non sed voluptate culpa voluptate cupidatat veniam mollit eu qui in anim officia cupidatat sed esse amet in ut dolor mollit aliqua do anim ut proident aliqua est elit reprehenderit deserunt ea do ad cupidatat magna dolore id commodo excepteur incididunt irure in duis voluptate mollit dolore enim aliquip eu occaecat eiusmod cupidatat fugiat minim nulla aute mollit dolor amet aliqua velit nulla consequat officia eu ullamco elit..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="social" className="content-section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>R&eacute;seaux Sociaux</h2>

                        <ul className="list-inline banner-social-buttons">
                            <li className="list-inline-item">
                                <a href="https://twitter.com/3rgo_" target="_blank" rel="noopener" className="btn btn-default btn-lg">
                                    <FontAwesomeIcon icon={faTwitter} fixedWidth/>
                                    <span className="network-name">Twitter</span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/3rgo" target="_blank" rel="noopener" className="btn btn-default btn-lg">
                                    <FontAwesomeIcon icon={faGithub} fixedWidth/>
                                    <span className="network-name">Github</span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/romain-gonçalves-83214423" target="_blank" rel="noopener" className="btn btn-default btn-lg">
                                    <FontAwesomeIcon icon={faLinkedin} fixedWidth/>
                                    <span className="network-name">LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container text-center">
                <p className="lead">Copyright &copy; 3rgo.me 2018</p>
                <p className="font-weight-light">
                    <small>
                        Built with <a href="https://gatsbyjs.org/" target="_blank" rel="noopener">Gatsby</a>, <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a> and <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a>.<br/>
                        Based on <a target="_blank" rel="noopener" href="https://github.com/BlackrockDigital/startbootstrap-grayscale">Greyscale theme by Start Bootstrap</a>
                    </small>
                </p>
            </div>
        </footer>
    </div>
)

export default IndexPage
