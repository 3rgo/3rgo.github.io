import React from 'react';

import TechItem from "../components/TechItem.js"

const TechList = (props) => {
  return (
    <div>
        {
            props.items.map ((row, rowIdx) => (
                <div key={"row-" + rowIdx} className="d-flex justify-content-around techitem-row">
                {
                    row.map((item, itemIdx) => (<TechItem key={"row-" + rowIdx + "-" + itemIdx} {...item} />))
                }
                </div>
            ))
        }
    </div>
  )
}

export default TechList;