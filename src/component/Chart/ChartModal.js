import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import addFunnel from "highcharts/modules/funnel";

class ChartModal extends React.Component {
  componentWillMount() {
    addFunnel(Highcharts);
    // Construct the chart
    Highcharts.chart(
      "chart",
      {
        /*Options*/
      }
    );
  }

  render() {
    return (<div id="chart"> </div>);
  }
} export default ChartModal;
