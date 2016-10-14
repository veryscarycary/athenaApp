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

class Bar extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    for (var i = 0; i < this.props.articles.length; i++) {
      barData[0].values.push({ "x": i, "y": this.props.articles[i].viewCount});
      barData[1].values.push({ "x": i, "y": this.props.articles[i].useCount});
    }

    return  (
    	<BarChart
      data={barData}
      width={400}
      height={400}
      title="Viewed Articles vs Used Articles "
      xAxisLabel="Articles"
      yAxisLabel="Count"
      />
    );
  }
};

export default Bar;
