import React from 'react'

import TechItem from "../components/TechItem.js"

export default class TechList extends React.Component {

    constructor(props){
        super(props);

        this.renderMobile = this.renderMobile.bind(this);
        this.renderBrowser = this.renderBrowser.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    renderBrowser() {
        return this.props.items.map ((row, rowIdx) => (
            <div key={"row-" + rowIdx} className="d-flex justify-content-around techitem-row">
            {
                row.map((item, itemIdx) => (<TechItem key={"row-" + rowIdx + "-" + itemIdx} {...item} />))
            }
            </div>
        ))
    }

    renderMobile() {
        return "toto";
    }

    render() {
        if (this.state.width < 992) {
            return <div>{this.renderMobile()}</div>
        }
        return <div>{this.renderBrowser()}</div>
    }

    updateDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}
