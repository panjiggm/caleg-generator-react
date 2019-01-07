import React, { Component } from "react";

import Form from "./Form";

class Body extends Component {
  render() {
    return (
      <div class="ui two column centered grid">
        <div class="column">
          <h4>The {this.props.title}</h4>
          <Form />
        </div>
      </div>
    );
  }
}

export default Body;
