//sample userData
const store = {
  programData: {},
  userData: {
    user: {
      id: "adfasdf",
    },
    legend: [
      { id: 1, name: "default", colorCode: "#acd162" },
      { id: 2, name: "mr/fold", colorCode: "#ffeb3b" },
      { id: 3, name: "mr/call", colorCode: "#ff944e" },
      { id: 4, name: "mr/4bet", colorCode: "#ad7957" },
      { id: 5, name: "os", colorCode: "#9b6aa1" },
    ],
    charts: [
      {
        name: "7$ spiny",
        ranges: [
          {
            title: "BTN",
            range: {
              name: "25+bb",
              range: [
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
                  range: ["44", "55", "22"],
                },
                {
                  name: "mr/call",
                  range: ["AJs", "ATs"],
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
