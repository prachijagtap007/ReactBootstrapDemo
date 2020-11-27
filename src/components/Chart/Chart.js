import React from "react";
import { Row, Col,DropdownButton,Dropdown } from "react-bootstrap";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";

export default function MyChart() {
  const Plot = createPlotlyComponent(Plotly);

        var barData = [
            {
              x: [0, 1, 2, 3, 4],
              y: [18, 20, 26, 35, 44],
              type: 'bar',
              marker: {
                color: [
                  "rgba(4,204,204,1)",
                  "rgba(222,45,38,0.8)",
                  "rgba(204,204,24,1)",
                  "rgba(4,204,254,1)",
                ],
              },
            },
            {
              x: [ 5, 6, 7, 8],
              y: [35, 26, 17, 8],
              type: 'bar'
            }

        ];

        var barLayout = {

          title: {
            text: "1.Bar Chart",
            font: {
              family: "Times new Roman, monospace",
              size: 18,
            },
            xaxis: {
              autotick: true,
              title: 'Number',
            },
            yaxis: {
              autotick: false,
              ticks: 'outside',
              tick0: 0,
              dtick: 0.25,
              ticklen: 8,
              tickwidth: 4,
              tickcolor: '#000'
            }
          },
        };

        var lineData=[{
          x: [1, 2, 3, 4,7,8,9,13],
          y: [16, 5, 11, 9,13,14,18,20],
          type: 'scatter'
        },
        {
          x: [1, 2, 3, 4, 5,6,14,13,16],
          y: [16, 18, 17, 18, 16,18,20,23],
          mode: 'lines',
          name: 'dot',
          line: {
            dash: 'dot',
            width: 4
          }
        }];
        var lineLayout= {
          title:'3.Scatter(Mode:Line)',
          height: 350,
          width: 400,
          showlegend: false

        };

        var pieData = [
          {
            values: [5120, 3600, 450],
            labels: ["Patients", "Recovered", "Death"],
            type: "pie",
          },
        ];
        var pieLayout = {
          height: 350,
          width: 400,
          title: {
            text: "2.Pie Chart",
            font: {
              family:'Raleway, sans-serif',
              size: 22,
            },


          },
        };
        var scatterData = [
          {
            x: [1, 2, 3, 4, 5],
            y: [1, 6, 3, 6, 1],
            mode: 'markers',
            type: 'scatter',
            name: 'Team A',
            text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
            marker: { size: 12 }
          },
          {
            x: [1.5, 2.5, 3.5, 4.5, 5.5],
            y: [4, 1, 7, 1, 4],
            mode: 'markers',
            type: 'scatter',
            name: 'Team B',
            text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
            marker: { size: 12 }
          }
        ];
        var scatterLayout = {
          height: 350,
          width: 400,
          title: {
            text: "4.Scatter(Mode:markers)",
            font: {
              family: "Courier New, monospace",
              size: 12,
            },
          },

        };
  return (
    <div>
      <a href="https://openbase.io/js/react-plotly.js" target="_blank">
        Check package performance
      </a>
      <Row>

        {/* bar chart */}
        <Col className="sm">
          <Plot data={barData} layout={barLayout} config={{displayModeBar: false}} />
        </Col>

        {/* Line Chart */}
        <Col className="sm">
          <Plot data={lineData} layout={lineLayout} config={{scrollZoom: true}}/>
        </Col>
      </Row>
      <Row>
        {/* scatter Chart */}
         {/* Pie Chart */}
         <Col className="sm">
          <Plot data={pieData} layout={pieLayout} config={{displayModeBar: true}}/>
        </Col>
        <Col className="sm">
          <Plot data={scatterData} layout={scatterLayout} config={{modeBarButtonsToRemove: ['toImage','zoom2d','pan2d','select2d'] }}/>
        </Col>
      </Row>
    </div>
  );
}
