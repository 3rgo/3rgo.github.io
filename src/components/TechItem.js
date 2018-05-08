import React from 'react'
import ReactStars from 'react-stars'

const TechItem = (props) => {
    return (
        <div className="d-flex flex-column techitem mx-3 mb-2">
            <div className="px-2">
                <img src={"http://via.placeholder.com/150?text="+props.name} alt={props.name+" logo"}/>
            </div>
            <div className="px-2">
                <a href={props.url} target="_blank" rel="noopener">
                    {props.name}
                </a>
            </div>
            <div className="mx-auto">
                <ReactStars count={5} value={props.level} edit={false} />
            </div>
        </div>
    )
}

export default TechItem;