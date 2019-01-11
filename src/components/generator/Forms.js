import React, { Component } from "react";
import { Button, Form, Divider } from "semantic-ui-react";

const options = [
  { key: "w", text: "Wakanda", value: "Wakanda" },
  { key: "a", text: "Asgard", value: "Asgard" },
  { key: "m", text: "Marineford", value: "Marineford" },
  { key: "c", text: "Cybertron", value: "Cybertron" },
  { key: "k", text: "Konoha", value: "Konoha" }
];

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      dapil: null,
      program1: "",
      program2: "",
      program3: ""
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();

    const detailCaleg = {
      nama: this.state.nama,
      dapil: this.state.dapil,
      program1: this.state.program1,
      program2: this.state.program2,
      program3: this.state.program3
    };

    if (
      this.state.nama === "" ||
      this.state.dapil === "" ||
      this.state.program1 === "" ||
      this.state.program2 === "" ||
      this.state.program3 === ""
    ) {
      return window.confirm("Please fill in all fields !!");
    } else {
      this.props.dataCaleg(detailCaleg);
    }

    this.setState({
      nama: "",
      dapil: null,
      program1: "",
      program2: "",
      program3: ""
    });
  };

  clearDataCaleg = () => {
    if (window.confirm("Are u sure ?")) {
      return this.props.clearCaleg();
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.submit}>
          <Form.Input
            fluid
            name="nama"
            label="Nama"
            placeholder="Nama"
            onChange={this.handleInput}
            value={this.state.nama}
          />
          <Form.Select
            fluid
            name="dapil"
            label="Gender"
            onChange={this.handleInput}
            options={options}
            placeholder="Pilih Dapil"
          />
          <Form.Input
            fluid
            name="program1"
            label="Program Kerja"
            placeholder="Program Kerja 1"
            onChange={this.handleInput}
            value={this.state.program1}
          />
          <Form.Input
            fluid
            name="program2"
            placeholder="Program Kerja 2"
            onChange={this.handleInput}
            value={this.state.program2}
          />
          <Form.Input
            fluid
            name="program3"
            placeholder="Program Kerja 3"
            onChange={this.handleInput}
            value={this.state.program3}
          />
          <Divider />
          <Button color="teal" type="submit">
            Submit
          </Button>
          <Button
            type="button"
            color="red"
            floated="right"
            onClick={this.clearDataCaleg}
          >
            Clear
          </Button>
        </Form>
        <Divider />
      </div>
    );
  }
}

export default Forms;
