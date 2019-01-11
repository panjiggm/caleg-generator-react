import React, { Component } from "react";
import { Container, Message } from "semantic-ui-react";

class BannerHome extends Component {
  constructor() {
    super();

    this.state = {
      quotes: [
        {
          header: "Nurhadi - Aldo Quotes",
          content: "Democrazy adalah tempat bersuara bagi orang-orang kaya"
        },
        {
          header: "Nurhadi - Aldo Quotes",
          content: "MAMPUS HUJAN !!!"
        },
        {
          header: "Nurhadi - Aldo Quotes",
          content: "Saya sedang bersama PELAKOR (PEnyanyi LAgu KORea)"
        },
        {
          header: "Nurhadi - Aldo Quotes",
          content: "Selamat datang di whatdefak Indonesia"
        },
        {
          header: "Nurhadi - Aldo Quotes",
          content: "Aparat didalam negeri akan menjadi petani PNS gol AB"
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        {this.state.quotes.map((quote, index) => (
          <Message warning key={index}>
            <Message.Header> {quote.header} </Message.Header>
            <Message.Content>{quote.content}</Message.Content>
          </Message>
        ))}
      </Container>
    );
  }
}

export default BannerHome;
