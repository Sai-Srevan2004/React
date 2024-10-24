import React from 'react'

const Item = (props) => {
    return (
        <div>
                        {props.children}

            <h1>{props.name}</h1>
        </div>
    )
}

export default Item
