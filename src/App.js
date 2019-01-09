import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Body title="Lengkapi Form Dibawah ini" />
        <Footer />
      </Container>
    );
  }
}

export default App;
