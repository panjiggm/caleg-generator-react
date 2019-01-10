import React, { Component } from "react";
import { Container, Message, Form, Button } from "semantic-ui-react";

class BodyHome extends Component {
  render() {
    return (
      <Container>
        <Message info>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Message>
      </Container>
    );
  }
}

export default BodyHome;
