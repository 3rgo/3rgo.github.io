import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import config from "../utils/config"

export default class EmailButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shown: false
        }
    }

    render() {
        return (
            <div>
                <button href="#" className="btn btn-default btn-lg" onClick={ (e) => this.setState({shown: !this.state.shown}) }>
                    <FontAwesomeIcon icon={"envelope" + (this.state.shown ? "-open" : "")} fixedWidth/>
                    <span className="network-name">{ this.state.shown ? "La voici :" : "Obtenir mon adresse" }</span>
                </button>
                { this.state.shown ? (
                    <a href={ "mailto:" + config.contactEmail } className="pl-3">{ config.contactEmail }</a>
                ) : "" }
            </div>
        )
    }
}