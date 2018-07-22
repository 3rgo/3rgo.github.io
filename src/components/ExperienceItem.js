import React from 'react'

export default class ExperienceItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="media">
                <a href={this.props.url} target="_blank" rel="noopener" className="d-flex img-wrapper justify-content-center align-content-center">
                    <img className="align-self-start mr-3 main-logo" src={'static/logos/'+this.props.logo} alt={this.props.name+" logo"} title={this.props.name+" logo"}/>
                </a>
                <div className="media-body">
                    <h5><strong>{this.props.start} - {this.props.end}</strong>&nbsp;:&nbsp;{this.props.name}</h5>
                    <p className="lead">{this.props.job}</p>
                    <dl className="row">
                        {
                            this.props.history.map(function(item, itemIdx){
                                if(typeof item === "string" || item instanceof String){
                                    return (<dd className="col-sm-12 orphan"><p>{item}</p></dd>)
                                } else {
                                    return (
                                        <div key={"histItem-"+itemIdx} className="action-row row">
                                            <dt className="col-sm-3">
                                                <div className="d-flex img-wrapper justify-content-center align-content-center text-center">
                                                    <a href={item.url} target="_blank" rel="noopener">
                                                        <img className="small" src={'static/logos/'+item.logo} alt={item.client+" logo"} title={item.client+" logo"} />
                                                        <br/>
                                                        <div className="my-2">
                                                            <small>{item.client}</small>
                                                        </div>
                                                    </a>
                                                </div>
                                            </dt>
                                            <dd className="col-sm-9">
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