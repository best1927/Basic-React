import React, {Component} from "react";


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

      <div> Hello Basic React</div>

    );
  }
}

export default App;
