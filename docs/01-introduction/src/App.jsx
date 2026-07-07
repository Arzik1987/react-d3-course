import * as d3 from "d3";
import "./App.css";

export const Barplot = ({ data }) => {
  const width = 500;
  const height = 400;
  const margin = {
    top: 20,
    right: 40,
    bottom: 20,
    left: 140,
  };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, innerHeight])
    .padding(0.2);

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students) ?? 0])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height} role="img" aria-label="Students by country">
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map((d) => {
          const y = yScale(d.country) ?? 0;
          const barWidth = xScale(d.students);

          return (
            <g key={d.country}>
              <text
                x={-12}
                y={y + yScale.bandwidth() / 2}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize={12}
                fill="currentColor"
              >
                {d.country}
              </text>

              <rect
                x={0}
                y={y}
                width={barWidth}
                height={yScale.bandwidth()}
                fill="#2563eb"
                rx={4}
              />

              <text
                x={barWidth + 8}
                y={y + yScale.bandwidth() / 2}
                dominantBaseline="middle"
                fontSize={12}
                fill="currentColor"
              >
                {d.students}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

function App() {
  const data = [
    { country: "United States", students: 68 },
    { country: "France", students: 21 },
    { country: "United Kingdom", students: 21 },
    { country: "Germany", students: 20 },
    { country: "Switzerland", students: 13 },
    { country: "Spain", students: 10 },
    { country: "Netherlands", students: 9 },
    { country: "India", students: 9 },
    { country: "Singapore", students: 8 },
    { country: "Ireland", students: 8 },
    { country: "Sweden", students: 7 },
    { country: "Australia", students: 7 },
    { country: "Canada", students: 6 },
    { country: "Finland", students: 5 },
    { country: "Mexico", students: 4 },
    { country: "Brazil", students: 4 },
    { country: "Saudi Arabia", students: 3 },
    { country: "Romania", students: 3 },
    { country: "Philippines", students: 3 },
    { country: "New Zealand", students: 3 },
  ];

  return (
    <main>
      <Barplot data={data} />
    </main>
  );
}

export default App;
