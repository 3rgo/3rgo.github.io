import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDoubleDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'

import TechList from "../components/TechList.js"
import ExperienceList from "../components/ExperienceList.js"

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
                        <TechList items={config.content.technologies} />
                    </div>
                </div>
            </div>
        </section>
        <section id="experiences" className="content-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Exp&eacute;riences</h2>
                        <ExperienceList items={config.content.experiences} />
                    </div>
                </div>
            </div>
        </section>
        <section id="training" className="content-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Formation</h2>
                        <dl>
                        {
                            config.content.training.map((trainingItem, idx) => (
                                <div key={"training-"+idx} className="row">
                                    <dt className="col-sm-3">
                                        {trainingItem.period}
                                    </dt>
                                    <dd className="col-sm-9">
                                        <p><strong>{trainingItem.title}</strong>, {trainingItem.location}</p>
                                        { trainingItem.hasOwnProperty("spec") ? <p className="small">Sp&eacute;cialit&eacute; : {trainingItem.spec}</p> : "" }
                                    </dd>
                                </div>
                            ))
                        }
                        </dl>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Langues</h2>
                        <dl>
                        {
                            config.content.languages.map((languageItem, idx) => (
                                <div key={"language-"+idx} className="row">
                                    <dt className="col-sm-3">
                                        {languageItem.name}
                                    </dt>
                                    <dd className="col-sm-9">
                                        <p>{languageItem.level}</p>
                                        { languageItem.hasOwnProperty("misc") ? <p className="small">{languageItem.misc}</p> : "" }
                                    </dd>
                                </div>
                            ))
                        }
                        </dl>
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
                <p className="lead">Copyright &copy; rgoncalves.fr {(new Date).getFullYear() != 2018 ? "2018 - "+(new Date).getFullYear() : "2018"}</p>
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
