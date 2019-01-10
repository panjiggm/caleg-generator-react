import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Navbar from "../Navbar";

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <h3>Home</h3>
      </Container>
    );
  }
}

export default App;
