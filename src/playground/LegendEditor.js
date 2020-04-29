import React, { Component } from "react";
import LegendItem from "../components/core/LegendItem";

export class LegendEditor extends Component {
  state = {
    legend: [
      {
        id: 1,
        name: "",
        colorCode: "",
      },
    ],
  };
  render() {
    const handleClick = (e) => {
      const legendItem = {
        id: "",
        name: "",
        colorCode: "",
      };
      legendItem.id = this.state.legend.length + 1;
     this.setState(prevstate => {
         
     })
      console.log(this.state.legend);
    };
    return (
      <div className="legend-editor">
       {this.state.legend.map(item => <LegendItem key={item.id} />)}
        <button onClick={handleClick}>Add new</button>
      </div>
    );
  }
}

export default LegendEditor;
