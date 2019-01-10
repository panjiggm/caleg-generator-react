import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";

import Navbar from "../Navbar";
import Welcome from "./Welcome";
import BodyHome from "./BodyHome";
import BannerHome from "./BannerHome";

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Welcome />
        <Grid centered columns={2}>
          <Grid.Column floated="left">
            <BannerHome />
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
