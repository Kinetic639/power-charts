import React, { Component } from "react";
import ChartCell from "./ChartCell";

export class ChartGrid extends Component {
  state = {
    deck: ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"],
    grid: [],
    legend: [
      { id: 1, name: "default", colorCode: "#acd162" },
      { id: 2, name: "mr/fold", colorCode: "#ffeb3b" },
      { id: 3, name: "mr/call", colorCode: "#ff944e" },
      { id: 4, name: "mr/4bet", colorCode: "#ad7957" },
      { id: 5, name: "os", colorCode: "#9b6aa1" },
    ],
    displayedRanges: [
      {
        name: "mr/4bet",
        range: [
          "AA",
          "AKs",
          "AQs",
          " AJs",
          "AKo",
          "KK",
          "AQo",
          "QQ",
          "JJ",
          "TT",
          "99",
          "88",
          "77",
          "66",
        ],
      },
      {
        name: "os",
        range: ["44", "55",'22'],
      },
      {
        name: "mr/call",
        range: ["AJs", "ATs"],
      },
    ],
  };

  render() {
    const { grid, deck } = this.state;
    deck.forEach((firstCard, firstIndex) => {
      deck.forEach((secondCard, secondIndex) => {
        const cellData = {
          id: "",
          color: "",
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

        this.state.displayedRanges.forEach((range) => {
          if (range.range.includes(cellData.id)) {
            const colorCode = this.state.legend.find((obj) => {
              return obj.name === range.name;
            }).colorCode;
            if (colorCode) {
              cellData.color = colorCode;
            } else {
              cellData.color = this.state.legend[0].colorCode;
            }
          }
        });

        cellData.row = firstIndex + 1;
        cellData.col = secondIndex + 1;
        grid.push(cellData);
        console.log(cellData);
      });
    });

    return (
      <div>
        <header>Grid name</header>
        <div className="chart-grid" onMouseLeave={this.onMouseUp}>
          {grid.map((cell) => (
            <ChartCell
              key={`${cell.id}`}
              // onClick={this.onCellClickHandler(cell)}
              // onMouseDown={this.onMouseDown}
              // onMouseUp={this.onMouseUp}
              // onMouseOver={this.onMouseOVer}
              {...cell}
            />
          ))}
        </div>
        <div>Legenda/ustawienia</div>
        <div className="tabelka">
          <div className="tabelka-kolumna">
            <h3>HU SB</h3>
            <button>25bb+</button>
            <button>20-25bb+</button>
            <button>16-20bb+</button>
            <button>13-16bb</button>
            <button>10-13bb</button>
          </div>
          <div className="tabelka-kolumna">
            <h3>HU BB</h3>
            <button>25bb+</button>
            <button>20-25bb+</button>
            <button>16-20bb+</button>
            <button>13-16bb</button>
            <button>10-13bb</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartGrid;
