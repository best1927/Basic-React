import React, { Component } from "react";
import { HeaderBar } from "adminlte-reactjs";
import MenuSideBar from './container/SideMenuBar/menu_sidebar';
import OrganizationView from "./component/TabContent/OrganizationView";

class App extends Component {
  constructor() {
    super();
    this.state = { selected: "basic" };
  }

  render() {
    let contentStyle = {
      padding: "8px 10px 8px 10px"
    };

    return (
      <div>
        <HeaderBar />
        <MenuSideBar />
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="row" style={contentStyle}>
              <div className="col-md-12" />
              <OrganizationView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
