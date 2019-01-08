import React, { Component } from "react";

import Form from "./Form";
import Banner from "./Banner";

class Body extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  submit = caleg => {
    this.setState(state => ({ data: state.data.concat(caleg) }));
  };

  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          <h4>{this.props.title}</h4>
          <Form dataCaleg={this.submit} />
          <Banner calegInfo={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Body;
