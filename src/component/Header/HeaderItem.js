import React from "react";

class HeaderItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };
    let HeaderLabel = (
      <h3 className="box-title">
        <label id="lblHeader" data-lang="lblHeader">
          {this.props.HeaderText}
        </label>
      </h3>
    );

    let HeaderSel = this.props.htype;
    let HeaderType = "";
    if (this.props.htype !== "nobtn") {
      HeaderType = {
        SearchType: ( 
            <a
              id="binAdd"
              data-lang="binAdd"
              href={this.props.btnAddLink}
              title="Add"
              className="btn btn-circle btn-danger"
              style={btitleStyle}
            >
              <i className="fa fa-plus fa" />
            </a>
        
        ),
        NewType: (
          <div> 
            <div className="pull-right">
              <button className="btn btn-primary " id="btnSave">
                <span data-lang="lblSave">
                  <i className="fa fa-floppy-o" />Save
                </span>
              </button>

              <button className="btn btn-default " id="btnClose">
                <span data-lang="lblClose">
                  <i className="fa fa-times-circle-o" />Close
                </span>
              </button>
            </div>
            <div className="pull-left marginR10">
              <a
                id="btnBack"
                data-lang="btnBack"
                href={this.props.btnBackLink}
                title="Back"
                className="btn btn-circle btn-default"
                style={btitleStyle}
              >
                <i className=" fa fa-arrow-circle-left fa-2" />
              </a>
            </div>
          </div>
          
        )
      }[HeaderSel];
    }

   

    return (
       <div className="box-header with-border">
          {HeaderLabel}
          {HeaderType}
        </div>
      
    );
  }
}

export default HeaderItem;
