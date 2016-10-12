var React = require('react');
var ReactDOM = require('react-dom');
import rd3 from 'rd3';

var BarChart = rd3.BarChart
var barData = [
  {
    "name": "Series A",
    "values": [
      { "x": 1, "y":  91},
      { "x": 2, "y": 290},
      { "x": 3, "y": -25},
    ]
  },
  {
    "name": "Series B",
    "values": [
      { "x": 1, "y":  9},
      { "x": 2, "y": 49},
      { "x": 3, "y": -20},
    ]
  },
  {
    "name": "Series C",
    "values": [
      { "x": 1, "y":  14},
      { "x": 2, "y": 77},
      { "x": 3, "y": -70},
    ]
  }
];

var Bar = React.createClass({
  render: function() {
    return  (
    	<BarChart
      data={barData}
      width={450}
      height={400}
      title="Bar Chart"
      xAxisLabel="Value"
      yAxisLabel="Label"
      />
  )}
});

export default Bar;
