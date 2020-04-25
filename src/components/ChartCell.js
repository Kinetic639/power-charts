import React from "react";

const ChartCell = (props) => {
    const cellStyle = {
        backgroundColor: props.color
    }
  return <div style={cellStyle} className="chart-cell">{props.id}</div>;
};

export default ChartCell;
