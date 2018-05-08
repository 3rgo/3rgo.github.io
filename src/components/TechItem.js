import React from 'react';

const TechItem = (props) => {
    return (
        <div className="d-flex flex-column techitem mx-3">
            <div className="px-2">
                <img src={"http://via.placeholder.com/150?text="+props.name} alt={props.name+" logo"}/>
            </div>
            <div className="px-2">
                <a href={props.url} target="_blank" rel="noopener">
                    {props.name}
                </a>
            </div>
            <div className="px-2">{props.level}</div>
        </div>
    )
}

export default TechItem;