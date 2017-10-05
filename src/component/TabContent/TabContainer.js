import React from "react";
import { Button } from "react-bootstrap";
import HeaderContainer from "../Header/HeaderContainer";
class TabContainer extends React.Component {
  render() {
    const boxmargin = {
      margin: "0px 0px 5px 0px"
    };
    return (
      <div className="box box-primary">
        <HeaderContainer htype="TabType" HeaderText="Calendar" />
        <div className="box-body">
          <div className="examples">
            <div className="CalendarP">
              <CalendarContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TabContainer;
