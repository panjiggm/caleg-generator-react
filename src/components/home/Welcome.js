import React, { Component } from "react";
import { Container, Message, Image } from "semantic-ui-react";

class BodyHome extends Component {
  render() {
    return (
      <Container>
        <Message warning>
          <Message.Header>Welcome</Message.Header>
          <Image src="/assets/images/banner1.png" />
        </Message>
      </Container>
    );
  }
}

export default BodyHome;
