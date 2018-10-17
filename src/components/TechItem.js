import React from 'react'

import ReactStars from 'react-stars'

export default class TechItem extends React.Component {

    getScreenType(width){
        if(width < 768){
            return 'xs';
        } else if(width >= 768 && width < 992){
            return 'sm';
        } else {
            return 'lg';
        }
    }

    render() {
        const screenType = this.getScreenType(this.props.screenWidth);

        let cls = "d-flex flex-column techitem";
        if(screenType === "xs"){
            cls += " mx-1 mb-0 xsmall";
        } else if (screenType ==="sm"){
            cls += " mx-2 mb-0 small";
        } else {
            cls += " mx-3 mb-2";
        }

        return (
            <div className={cls}>
                <div className="px-2 d-flex img-wrapper justify-content-center align-content-center">
                    <img src={'static/logos/'+this.props.logo} alt={this.props.name+" logo"} title={this.props.name+" logo"}/>
                </div>
                <div className="px-0 text-center">
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        {this.props.name}
                    </a>
                </div>
                <div className="mx-auto">
                    <ReactStars count={5} value={this.props.level} size={12} edit={false} />
                </div>
            </div>
        )
    }
}