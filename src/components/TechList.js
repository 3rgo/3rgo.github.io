import React from 'react'

import TechItem from "../components/TechItem.js"

export default class TechList extends React.Component {

    constructor(props){
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);

        this.state = {
            width: 1024,
            height: 768
        };
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

    componentDidMount() {
        if(typeof window !== 'undefined'){
            this.updateDimensions();
        } else {
            this.setState({width: 1024, height: 768});
        }
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}
