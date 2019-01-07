import React, { Component } from "react";

import Form from "./Form";

class Body extends Component {
  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          <h4>{this.props.title}</h4>
          <Form />
        </div>
      </div>
    );
  }
}

export default Body;
