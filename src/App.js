import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <Body title="Fruits List" />
        <Footer />
      </div>
    );
  }
}

export default App;
