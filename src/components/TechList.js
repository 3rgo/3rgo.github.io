import React from 'react'

import TechItem from "../components/TechItem.js"

export default class TechList extends React.Component {

    constructor(props){
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    render() {
        return (<div>
            {
                this.props.items.map ((row, rowIdx) => (
                    <div key={"row-" + rowIdx} className="d-flex justify-content-around techitem-row">
                    {
                        row.map((item, itemIdx) => (<TechItem key={"row-" + rowIdx + "-" + itemIdx} {...item} screenWidth={this.state.width} />))
                    }
                    </div>
                ))
            }
        </div>)
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
