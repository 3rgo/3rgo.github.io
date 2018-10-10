import React from 'react'

export default class ExperienceItem extends React.Component {
    render() {
        return (
            <div className="row experience-row">
                <div className="col-md-3 col-sm-12">
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer" className="d-flex img-wrapper justify-content-center align-content-center">
                        <img className="align-self-start mr-3 main-logo" src={'static/logos/'+this.props.logo} alt={this.props.name+" logo"} title={this.props.name+" logo"}/>
                    </a>
                </div>

                <div className="col-md-9 col-sm-12">
                    <h5 className="d-none d-md-block">
                        <strong>{this.props.start} - {this.props.end}</strong>&nbsp;:&nbsp;{this.props.name}
                    </h5>
                    <h5 className="d-md-none text-center mt-4">
                        <strong>{this.props.start} - {this.props.end}</strong>
                        <br/>
                        {this.props.name}
                    </h5>
                    <p className="lead">{this.props.job}</p>
                    <dl className="row">
                        {
                            this.props.history.map(function(item, itemIdx){
                                if(typeof item === "string" || item instanceof String){
                                    return (
                                        <div key={"histItem-"+itemIdx} className="row">
                                            <dt className="d-none">&nbsp;</dt>
                                            <dd key={"histItem-"+itemIdx} className="col-sm-12 orphan">
                                                <p>{item}</p>
                                            </dd>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={"histItem-"+itemIdx} className="action-row row">
                                            <dt className="col-md-3 col-sm-12">
                                                <div className="d-flex img-wrapper justify-content-center align-content-center text-center">
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                        <img className="small" src={'static/logos/'+item.logo} alt={item.client+" logo"} title={item.client+" logo"} />
                                                        <br/>
                                                        <div className="my-2">
                                                            <small>{item.client}</small>
                                                        </div>
                                                    </a>
                                                </div>
                                            </dt>
                                            <dd className="col-md-9 col-sm-12">
                                                <ul>
                                                {
                                                    item.actions.map((act, actIdx) => (
                                                        <li key={"actItem-"+actIdx}>{act}</li>
                                                    ))
                                                }
                                                </ul>
                                            </dd>
                                        </div>
                                    )
                                }
                            })
                        }
                    </dl>
                </div>
            </div>
        )
    }
}