import React, { Component, PropTypes } from "react";
import renderHTML from "react-render-html";

export class test extends Component {
  render() {
    return renderHTML("<li>hello</li><li>world</li>");
  }
}
