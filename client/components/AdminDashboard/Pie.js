var React = require('react');
var ReactDOM = require('react-dom');
import rd3 from 'rd3';


var PieChart = rd3.PieChart;
var pieData = [{label: "Camera", value: 20.0}, {label: "Computer", value: 55.0}, {label: "Monitor", value: 25.0 }, {label: "Printer", value: 25.0 }];

class Pie extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return  (
      <div className='brownContainer'>
      	<PieChart
        data={pieData}
        width={450}
        height={400}
        radius={110}
        innerRadius={20}
        sectorBorderColor="white"
        title="Outstanding Issues" />
      </div>
    );
  };
};

export default Pie;
