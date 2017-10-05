/* global google */

import React, { Component, PropTypes } from "react";
let mapOptions = {};
let map, marker, infowindow;
let contentString = "";
export class MapTest extends Component {
  getInitialState() {
    return { loaded: false }; //initially not loaded
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./OrganizationMap.js";

    //when the script loads, we're ready to go, so change state
    script.onload = function() {
      this.setState({ loaded: true });
    }.bind(this);

    //append the script to the DOM
    //you should take care not to include it twice
    // and if include to setState to loaded just as script.onload does
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  render(){
    if(!this.state.loaded){
        return (<div>Loading...</div>);
    }

    //call method from the script rendered
    window.someMethod();
    return(
        <div>{this.componentWillMount}</div>

         );
    }
}
export default MapTest;
