import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

class Heading extends Component {
  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Caleg Generator</Header.Content>
        </Header>
      </div>
    );
  }
}

export default Heading;
