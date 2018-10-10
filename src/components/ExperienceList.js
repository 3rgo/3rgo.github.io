import React from 'react'

import ExperienceItem from "../components/ExperienceItem.js"


export default class ExperienceList extends React.Component {
    render() {
        return (<div>
            {
                this.props.items.map ((item, itemIdx) => (
                    <ExperienceItem key={"item-" + itemIdx} {...item} />
                ))
            }
        </div>)
    }
}
