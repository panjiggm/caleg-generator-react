import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container className="ui container">
        <Header />
        <Body title="Lengkapi Form Dibawah ini" />
        <Footer />
      </Container>
    );
  }
}

export default App;
