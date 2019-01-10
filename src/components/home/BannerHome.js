import React, { Component } from "react";
import { Container, Message, Image } from "semantic-ui-react";

class BannerHome extends Component {
  render() {
    return (
      <Container>
        <Message warning>
          <Message.Header> Nurhadi - Aldo Quotes </Message.Header>
          <Message.Content>
            Democrazy adalah tempat bersuara bagi orang-orang kaya
          </Message.Content>
        </Message>
      </Container>
    );
  }
}

export default BannerHome;
