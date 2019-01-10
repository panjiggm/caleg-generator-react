import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";

import Navbar from "../Navbar";
import BodyHome from "./BodyHome";
import Welcome from "./Welcome";

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Grid centered columns={2}>
          <Grid.Column floated="left">
            <Welcome />
          </Grid.Column>
          <Grid.Column floated="right">
            <BodyHome />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
