import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

const data = {
  labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = () => {

  const [chartData , setChartData] = useState([])
  console.log("from chart")
  useEffect(() => {
    fetch("https://rocky-chamber-15010.herokuapp.com/image")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);
  return (
    <>
      <div className="header">
        <h5 className="title text-center mt-5">Meme chart</h5>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js"
          >
          </a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default Chart;
