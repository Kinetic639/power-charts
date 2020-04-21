import React from 'react'

const ChartCell = (props) => {
    return (
        <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} className='chart-cell'>
            {props.id}
        </div>
    )
}

export default ChartCell
