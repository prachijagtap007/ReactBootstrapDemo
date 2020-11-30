export  const basicBarData= [
    {
      x: ['Jan', 'Feb', 'Mar','Apr'],
      y: [2, 28, 54,88],
      type: 'bar'
    }
  ];
export const basicBarLayout=
    {
        title: "Single Bar",
        height: 350,
        width: 400,
        showlegend: false,
    }
  const trace1 = {
    x: ['Jan', 'Feb', 'Mar'],
    name:'Mumbai',
    y: [26, 85, 156],
    type: 'bar',
    hoverinfo: 'none',
  };

  const trace2 = {
    x: ['Jan', 'Feb', 'Mar'],
    y: [12, 65, 60],
    name:'Delhi',
    type: 'bar',
    hoverinfo: 'none',
  };

  export const groupedBarData = [trace1, trace2];
  export const groupedBarLayout=
    {
        title: "Grouped Bar",
        height: 350,
        width: 400,
        showlegend: true,
    }

    // Direct Lables

var directxValue = ['Product A', 'Product B', 'Product C'];

var directYValue = [20, 14, 23];

var direct1 = {
  x: directxValue,
  y: directYValue,
  type: 'bar',
  text: directYValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color:  ['rgba(204,204,204,1)', 'rgba(222,45,38,0.8)','rgba(24,204,204,1)',],
    opacity: 0.6,
    line: {
      color: 'rgb(8,48,145)',
      width: 1.5
    }
  }
};

export const barDirectinfo = [direct1];

export const barDirectInfoLayout = {
  barmode: 'stack',
  title: "Direct Info",
  height: 350,
  width: 400,
  xaxis: {
    tickangle: -45
  },
};

/*Scatter*/
var Linetrace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  name:'Team A'
};

var Linetrace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter',
  name:'Team B'
};

export const basicLineData = [Linetrace1, Linetrace2];

export const basicLineLayout=
{
    title: "Line Plot",
    height: 350,
    width: 400,
    showlegend: true,
}
//Lines and scatters

var linescatter1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers',
  name:'Team P'
};

var linescatter2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines',
  name:'Team Q'
};

var linescatter3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers',
  name:'Team R'
};

export const lineScatterData = [ linescatter1, linescatter2, linescatter3 ];

export const  lineScatterLayout = {
  title:'Line and Scatter Plot',
  height: 350,
    width: 400,
};

//style scatter
export const styledScatterData = [{
  x: [12, 34, 64, 50],
  y: [106, 56, 118, 90],
  mode: 'markers',
  marker: {
    color: 'rgb(219, 64, 82)',
    size: 12
  },

}];
export const  styledScatterLayout = {
  title:'Styling Scatter',
  height: 350,
  width: 400,
};

export const styledLineData=[
  {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 2, 3, 1],
    mode: 'lines',
    name: 'dashdot',
    line: {
      dash: 'dashdot',
      width: 4
    },
  },
  {
    x: [1, 2, 3, 4, 5],
    y: [6, 8, 7, 8, 6],
    mode: 'lines',
    name: 'dot',
    line: {
      dash: 'dot',
      width: 4
    }
  },
  {
    x: [1, 2, 3, 4, 5],
    y: [11, 13, 12, 13, 11],
    mode: 'lines',
    name: 'line',
    line: {
      color: 'rgb(55, 18, 191)',
      width: 4
    }
  }
];
export const  styledLineLayout = {
  title:'Styling Line',
  height: 350,
  width: 400,
};

export const connectGapData=[
  {
    x: [1, 2, 3, 4, 5, 6, 7, 8],
    y: [16, null, 13, 10, 8, null, 11, 12],
    mode: 'lines',
    connectgaps: true,
    name:'connected'
  },
  {
    x: [1, 2, 3, 4, 5, 6, 7, 8],
    y: [16, null, 12, 9,7, null, 10, 11],
    mode: 'lines',
    name:'not-connected'
  }
];
export const  connectGapLayout = {
  title:'Connecting gaps',
  height: 350,
  width: 400,
};