import React, { Component } from "react";
import { Container, Message, Form, Button } from "semantic-ui-react";

class BodyHome extends Component {
  render() {
    return (
      <Container>
        <Message
          attached
          header="Selamat Datang di Dildo Caleg Generator"
          content="Jika Anda adalah seorang Caleg dari Partai PUKI, Silahkan Login"
        />
        <Form className="attached fluid segment">
          <Form.Input
            fluid
            label="Username"
            placeholder="Username"
            type="text"
          />
          <Form.Input
            fluid
            label="Password"
            placeholder="Password"
            type="password"
          />
          <Button color="blue">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default BodyHome;
