var React = require('react');
var ReactDOM = require('react-dom');
import rd3 from 'rd3';


var PieChart = rd3.PieChart;
var pieData = [{label: "Margarita", value: 20.0}, {label: "John", value: 55.0}, {label: "Tim", value: 25.0 }];

var Pie = React.createClass({
  render: function() {
    return  (
      <div className='grayContainer'>
      	<PieChart
        data={pieData}
        width={450}
        height={400}
        radius={110}
        innerRadius={20}
        sectorBorderColor="white"
        title="Pie Chart" />
      </div>
  )}
});

export default Pie;
