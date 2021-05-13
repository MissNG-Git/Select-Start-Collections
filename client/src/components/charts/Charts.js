import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";
import "./Charts.css";

export default function Charts() {
  // Preparing the chart data
  const [valueChartData, setValueChartData] = useState({});
  const [valueChartOptions, setValueChartOptions] = useState({});
  const [genreChartData, setGenreChartData] = useState({});
  const [genreChartOptions, setGenreChartOptions] = useState({});
  const [platformChartData, setPlatformChartData] = useState({});
  const [platformChartOptions, setPlatformChartOptions] = useState({});

  const valueChart = () => {
    setValueChartData({
      labels: ["April", "May", "June", "July", "August", "September"],
      datasets: [
        {
          label: "Retail Value",
          data: [69, 225, 180, 25, 140, 15],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });

    setValueChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Collection Value Per Month",
          fontSize: 25,
          padding: {
            top: 10,
            bottom: 30,
          },
        },
        legend: {
          display: true,
          position: "bottom",
        },
        aspectRatio: 4,
        responsive: true,
      },
    });
  };

  const genreChart = () => {
    setGenreChartData({
      labels: ["Action", "Adventure", "Co-Op", "Sports", "RPG", "Puzzle"],
      datasets: [
        {
          label: "Genre",
          data: [69, 225, 180, 25, 140, 15],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderWidth: 3,
        },
      ],
    });

    setGenreChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Genres",
          fontSize: 25,
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
      legend: {
        display: true,
        position: "bottom",
      },
      aspectRatio: 4,
      responsive: true,
    });
  };

  const platformChart = () => {
    setPlatformChartData({
      labels: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
      datasets: [
        {
          label: "Platforms",
          data: [69, 225, 180, 25, 140, 15],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderWidth: 3,
        },
      ],
    });

    setPlatformChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Platforms",
          fontSize: 25,
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
      legend: {
        display: true,
        position: "right",
      },
      aspectRatio: 4,
      responsive: true,
    });
  };

  // include in useEffect
  useEffect(() => {
    valueChart();
    genreChart();
    platformChart();
  }, []);

  return (
    <div className="charts-wrapper">
      <h4>CHARTS TEST!</h4>
      <Container className="charts-container">
        <Row className="charts-row">
          <Bar data={valueChartData} options={valueChartOptions} />
        </Row>
        <Row className="charts-row">
          <Col className="chart-col">
            <div className="doughnut">
              {/* change to genreChartData */}
              <Doughnut data={genreChartData} options={genreChartOptions} />
            </div>
          </Col>
          <Col className="chart-col">
            <div className="pie">
              {/* change to platformChartData */}
              <Pie data={platformChartData} options={platformChartOptions} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
