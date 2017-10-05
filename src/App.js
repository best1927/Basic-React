import React, {Component} from "react";
import {HeaderBar} from "adminlte-reactjs";
import MenuSideBar from './container/SideMenuBar/menu_sidebar';
import OrganizationView from "./component/TabContent/OrganizationView";

import {Route, Switch} from 'react-router-dom';

import AppItm1 from './container/appContainer/appitm1';
import AppItm2 from './container/appContainer/appitm2';
import AppItm010101 from './container/appContainer/appitm010101';
import AppItm0102 from './container/appContainer/appitm0102';
import AppItm0201 from './container/appContainer/appitm0201';
import AppItm020201 from './container/appContainer/appitm020201';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "basic"
    };
  }

  render() {
    let contentStyle = {
      padding: "8px 10px 8px 10px"
    };

    return (

      <div>
        
        <HeaderBar/>
        <MenuSideBar/>
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="row" style={contentStyle}>
              <div className="col-md-12"/>
              <Switch>
                <Route path='/appitm1' component={AppItm1}/>
                <Route path='/appitm2' component={AppItm2}/>
                <Route path='/appitm010101' component={AppItm010101}/>
                <Route path='/appitm0102' component={AppItm0102}/>
                <Route path='/appitm0201' component={AppItm0201}/>
                <Route path='/appitm020201' component={AppItm020201}/>
                <Route path='/' component={OrganizationView}/>
              </Switch>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
