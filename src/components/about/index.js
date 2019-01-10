import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Navbar from "../Navbar";
import BodyAbout from "./BodyAbout";

class About extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <BodyAbout />
      </Container>
    );
  }
}

export default About;
