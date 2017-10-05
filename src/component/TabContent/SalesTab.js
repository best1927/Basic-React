import React, { Component } from "react"; 
import "../../css/SaleTabStyle.css";
import { Button } from "react-bootstrap";
import ChartModal from "../Chart/ChartModal";

class SalesTab extends React.Component {
     
  render() {
    return (<div><ChartModal /></div>
    );
  }
}
export default SalesTab;
/* <div className="box box-primary marginB5">
        <div className="box-header with-border">
          <h4 className="box-title">Sales</h4>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-4 divpieChart">
              <div className="divContainerPie"
                id="containerPie " 
              />
            </div>
          </div>
        </section>
      </div>*/