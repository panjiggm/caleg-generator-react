import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import Forms from "./Forms";
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
      <Grid centered columns={2}>
        <Grid.Column>
          <h4>{this.props.title}</h4>
          <Forms dataCaleg={this.submit} />
          <Banner calegInfo={this.state.data} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Body;
