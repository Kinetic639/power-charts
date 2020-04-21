import React, { Component } from "react";
import ChartCell from "./ChartCell";

export class ChartGrid extends Component {
  state = {
    deck: ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"],
    grid: [],
    classes: [{ name: "mr", colorCode: "#ebeb34" }],
    selectedClass: "mr",
    isMouseDown: false,
  };
  onCellClickHandler = (e, cell) => {
    // if (e.ctrlKey) {
    //   console.log("ctrl");
    // } else if (e.shiftKey) {
    //   console.log("shift");
    // } else if (e.altKey) {
    //   console.log("alt");
    // }
    console.log(cell);
    
  };
  onMouseDown = (e) => {
    // this.setState({ isMouseDown: true });
    // console.log(e.target);
  };
  onMouseUp = () => {
    this.setState({ isMouseDown: false });
  };
  onMouseOVer = (e) => {
    if (this.state.isMouseDown === true) {
      e.target.style.backgroundColor = "red";
    }
  };
  componentDidMount() {
    const { grid, deck } = this.state;
    deck.forEach((firstCard, firstIndex) => {
      deck.forEach((secondCard, secondIndex) => {
        const cellData = {
          id: "",
          color: "default-cell-style",
          type: "",
          col: 0,
          row: 0,
        };
        if (firstIndex > secondIndex) {
          cellData.type = "o";
          cellData.id = `${secondCard}${firstCard}${cellData.type}`;
        } else if (firstIndex < secondIndex) {
          cellData.type = "s";
          cellData.id = `${firstCard}${secondCard}${cellData.type}`;
        } else {
          cellData.type = "pp";
          cellData.id = `${firstCard}${secondCard}`;
        }
        cellData.row = firstIndex + 1;
        cellData.col = secondIndex + 1;
        grid.push(cellData);
      });
    });
  }

  render() {
    const { grid, deck } = this.state;

    return (
      <div className="chart-grid" onMouseLeave={this.onMouseUp}>
        {grid.map((cell) => (
          <ChartCell
            key={`${cell.id}`}
            onClick={this.onCellClickHandler(cell)}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onMouseOver={this.onMouseOVer}
            {...cell}
          />
        ))}{" "}
        {/* {this.state.grid} */}
      </div>
    );
  }
}

export default ChartGrid;
