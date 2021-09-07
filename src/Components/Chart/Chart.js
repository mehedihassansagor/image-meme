import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

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
  const [lastOneDays, setLastOneDays] = useState([]);
  const [lastTwoDays, setLastTwoDays] = useState([]);
  const [lastThreeDays, setLastThreeDays] = useState([]);
  const [lastFourDays, setLastFourDays] = useState([]);
  const [lastFiveDays, setLastFiveDays] = useState([]);
  const [lastSixDays, setLastSixDays] = useState([]);
  const [lastSevenDays, setLastSevenDays] = useState([]);

  useEffect(() => {
    fetch("https://rocky-chamber-15010.herokuapp.com/image/lastOneDays")
      .then((res) => res.json())
      .then((data) => setLastOneDays(data));

      fetch("https://rocky-chamber-15010.herokuapp.com/image/lastTwoDays")
      .then((res) => res.json())
      .then((data) => setLastTwoDays(data));

      fetch("https://rocky-chamber-15010.herokuapp.com/image/lastThreeDays")
      .then((res) => res.json())
      .then((data) => setLastThreeDays(data));

      fetch("https://rocky-chamber-15010.herokuapp.com/image/lastFourDays")
      .then((res) => res.json())
      .then((data) => setLastFourDays(data));

      fetch("https://rocky-chamber-15010.herokuapp.com/image/lastFiveDays")
      .then((res) => res.json())
      .then((data) => setLastFiveDays(data));

      fetch("https://rocky-chamber-15010.herokuapp.com/image/lastSixDays")
      .then((res) => res.json())
      .then((data) => setLastSixDays(data));

      fetch("https://rocky-chamber-15010.herokuapp.com/image/lastSevenDays")
      .then((res) => res.json())
      .then((data) => setLastSevenDays(data));
  }, []);

  const data = {
    labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
    datasets: [
      {
        label: "# total image",
        data: [lastOneDays.length, lastTwoDays.length, lastThreeDays.length, lastFourDays.length, lastFiveDays.length, lastSixDays.length, lastSevenDays.length],
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

  return (
    <div className="container">
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
    </div>
  );
};

export default Chart;
