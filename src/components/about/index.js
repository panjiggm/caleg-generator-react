import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../Navbar";

class About extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <h3>About</h3>
      </Container>
    );
  }
}

export default About;
