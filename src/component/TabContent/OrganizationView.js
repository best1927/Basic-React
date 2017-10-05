import React from "react";
import { Button } from "react-bootstrap";
import HeaderContainer from "../Header/HeaderContainer";
import AboutTab from "./AboutTab";
import HistoryTab from "./HistoryTab";
import EmailTab from "./EmailTab";
import NotesTab from "./NotesTab";
import FilesTab from "./FilesTab";
import TasksTab from "./TasksTab";
import EventsTab from "./EventsTab";
import SalesTab from "./SalesTab";
import TeamTab from "./TeamTab";


class OrganizationView extends React.Component {
  constructor() {
    super();
    this.state = { selected: "About" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.dataset.txt, e.target.dataset.space);
    this.setState({ selected: "About" });
  }

  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };
    const boxmargin = {
      margin: "0px 0px 5px 0px"
    };

    let selected = this.state.selected;
    let CurrentTab = {
      About: AboutTab,
      History: HistoryTab,
      Email: EmailTab,
      Notes: NotesTab,
      Files: FilesTab,
      Tasks:TasksTab,
      Events:EventsTab,
      Sales: SalesTab,
     Team :TeamTab
    }[selected];

    return (
      <div className="box box-primary marginB5">
        <div className="box-header with-border">
          <h3 className="box-title">
            <label className="marginT10" id="lblHeader" data-lang="lblHeader">
              Organization
            </label>
          </h3>
          <div className="pull-left marginR10">
            <a
              id="btnBack"
              data-lang="btnBack"
              href="#"
              title="Back"
              className="btn btn-circle btn-default"
              style={btitleStyle}
            >
              <i className=" fa fa-arrow-circle-left fa-2" />
            </a>
            <a
              id="btnEdit"
              data-lang="btnEdit"
              href="#"
              title="Edit"
              className="btn btn-circle btn-success"
              style={btitleStyle}
            >
              <i className="fa fa-pencil fa-2" />
            </a>
            <a
              id="btnDelete"
              data-lang="btnDelete"
              href="#"
              title="Delete"
              className="btn btn-circle btn-default"
              style={btitleStyle}
            >
              <i className="fa fa-trash-o fa-2" />
            </a>
          </div>
          <ul id="tbToolbar" className="nav nav-pills pull-right">
            <li
              className={this.state.selected === "About" ? "active" : ""}
              onClick={() => this.setState({ selected: "About" })}
            >
              <a data-toggle="tab" href="#">
                About
              </a>
            </li>
            <li
              className={this.state.selected === "History" ? "active" : ""}
              onClick={() => this.setState({ selected: "History" })}
            >
              <a data-toggle="tab" href="#">
                History
              </a>
            </li>
            <li
              className={this.state.selected === "Email" ? "active" : ""}
              onClick={() => this.setState({ selected: "Email" })}
            >
              <a data-toggle="tab" href="#">
                Email
              </a>
            </li>
            <li
              className={this.state.selected === "Notes" ? "active" : ""}
              onClick={() => this.setState({ selected: "Notes" })}
            >
              <a data-toggle="tab" href="#">
                Notes
              </a>
            </li>
            <li
              className={this.state.selected === "Files" ? "active" : ""}
              onClick={() => this.setState({ selected: "Files" })}
            >
              <a data-toggle="tab" href="#">
                Files
              </a>
            </li>
            <li
              className={this.state.selected === "Tasks" ? "active" : ""}
              onClick={() => this.setState({ selected: "Tasks" })}
            >
              <a data-toggle="tab" href="#">
                Tasks
              </a>
            </li>
            <li
              className={this.state.selected === "Events" ? "active" : ""}
              onClick={() => this.setState({ selected: "Events" })}
            >
              <a data-toggle="tab" href="#">
                Events
              </a>
            </li>
            <li
              className={this.state.selected === "Sales" ? "active" : ""}
              onClick={() => this.setState({ selected: "Sales" })}
            >
              <a data-toggle="tab" href="#">
                Sales
              </a>
            </li>
            <li
              className={this.state.selected === "Team" ? "active" : ""}
              onClick={() => this.setState({ selected: "Team" })}
            >
              <a data-toggle="tab" href="#">
                Team Support
              </a>
            </li>
          </ul>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content marginB5">
                <CurrentTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OrganizationView;
