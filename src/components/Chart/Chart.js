import React from "react";
import { Row, Col } from "react-bootstrap";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";

export default function MyChart() {
  const Plot = createPlotlyComponent(Plotly);
  var pieData = [
    {
      values: [19, 26, 55],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
    },
  ];

  var pieLayout = {
    height: 400,
    width: 500,
    title: {
      text: "Pie Chart",
      font: {
        family: "Courier New, monospace",
        size: 24,
      },
    },
  };

  var barData = [
    {
      x: ["Jan", "Feb", "Mar"],
      y: [25, 44, 230],
      type: "bar",
      marker: {
        color: [
          "rgba(4,204,204,1)",
          "rgba(222,45,38,0.8)",
          "rgba(204,204,24,1)",
        ],
      },
    },
  ];

  var barLayout = {
    height: 400,
    width: 500,
    title: {
      text: "Bar Chart",
      font: {y
        family: "Times new Roman, monospace",
        size: 24,
      },
      xaxis: {
        tickangle: -45,
      },
    },
  };
  return (
    <div>
      <a href="https://openbase.io/js/react-plotly.js" target="_blank">
        Check package performance
      </a>
      <Row>
        {/* Pie Chart */}
        <Col>
          <Plot data={pieData} layout={pieLayout} />
        </Col>
        {/* bar chart */}
        <Col>
          <Plot data={barData} layout={barLayout} />
        </Col>
      </Row>
    </div>
  );
}
