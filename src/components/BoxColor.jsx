import React from 'react'

function BoxColor(props) {
    //  const props = {r, g, b}

    const style = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        width: '500px',
        height: '100px'
    }
    console.log(style)
    return (
        <div style={style} > </div>
    )
}

export default BoxColor