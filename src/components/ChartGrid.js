import React, { Component } from "react";
import ChartCell from "./ChartCell";

export class ChartGrid extends Component {
  state = {
    deck: ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"],
    grid: [],
  };
  //   onCellClickHandler = (e) => {
  //     console.log(e.target);
  //   };
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
            cellData.id = `${secondCard}${firstCard}`;
            cellData.type = "o";
          } else if (firstIndex < secondIndex) {
            cellData.id = `${firstCard}${secondCard}`;
            cellData.type = "s";
          } else {
            cellData.id = `${firstCard}${secondCard}`;
            cellData.type = "pp";
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
      <div className="chart-grid">
        {grid.map((cell) => (
          <ChartCell
            key={`${cell.id}${cell.type}`}
            onClick={this.onCellClickHandler}
            {...cell}
          />
        ))}   {/* {this.state.grid} */}
      </div>
    );
  }
}

export default ChartGrid;
