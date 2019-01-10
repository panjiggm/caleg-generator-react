import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { value }) => this.setState({ activeItem: value });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          name="generator"
          active={activeItem === "generator"}
          onClick={this.handleItemClick}
        >
          <Link to="/generator">Generator</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
