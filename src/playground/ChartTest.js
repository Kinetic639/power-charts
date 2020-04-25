import React, { Component } from 'react'
import ChartGrid from '../components/ChartGrid'

export class ChartTest extends Component {
  state = {
    legend: [
        { name: "mr/fold", color: "#333" },
        { name: "mr/call", color: "#333" },
        { name: "mr/4bet", color: "#333" },
      ],
      charts: [
        {
          id: "adfasdfasdf",
          name: "name of this chart",
          table: [
            {
              Header: "First column",
              accessor: "firstName",
            },
            {
              Header: "Second column",
              accessor: "lastName",
            },
          ],
        },
      ],
      createdAt: 0,
  }

    render() {
        return (
            <div>
                <ChartGrid />
            </div>
        )
    }
}

export default ChartTest
