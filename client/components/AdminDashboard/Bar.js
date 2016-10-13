var React = require('react');
var ReactDOM = require('react-dom');
import rd3 from 'rd3';

var BarChart = rd3.BarChart
var barData = [
  {
    "name": "Views",
    "values": []
  },
  {
    "name": "Uses",
    "values": []
  }
];
for (var i = 0; i < 30; i++) {
  barData[0].values.push({ "x": i, "y": Math.random() * 100});
  barData[1].values.push({ "x": i, "y": Math.random() * 100});
}

var Bar = React.createClass({
  render: function() {
    return  (
    	<BarChart
      data={barData}
      width={450}
      height={400}
      title="Viewed Articles vs Used Articles "
      xAxisLabel="Articles"
      yAxisLabel="#"
      />
  )}
});

export default Bar;
