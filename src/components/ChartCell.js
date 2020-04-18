import React from 'react'

const ChartCell = (props) => {
    return (
        <div onClick={props.onClick} className='chart-cell'>
            {props.id}{props.type !== 'pp' ? props.type : null}
        </div>
    )
}

export default ChartCell
