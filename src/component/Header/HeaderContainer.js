import React from "react";
import HeaderItem from "./HeaderItem";
import HeaderItemTab from "./HeaderItemTab";

class HeaderContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    let hType = this.props.htype;
    let HeaderShow = (
      <HeaderItem
        htype={this.props.htype}
        HeaderText={this.props.HeaderText}
        btnAddLink={this.props.btnAddLink}
      />
    );

    if (hType === "TabType") {
      HeaderShow = (
        <HeaderItemTab
          HeaderText={this.props.HeaderText}
          btnBackLink={this.props.btnBackLink}
          btnEditLink={this.props.btnEditLink}
          btnDeleteLink={this.props.btnDeleteLink}
          SalesYN ={this.props.SalesYN}
          TeamYN ={this.props.TeamYN}
        />
      );
    }

    return (
      <div>
        {HeaderShow}
      </div>
    );
  }
}
export default HeaderContainer;
