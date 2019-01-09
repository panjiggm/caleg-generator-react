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
  constructor() {
    super();

    this.state = {
      nama: "",
      dapil: null,
      program1: "",
      program2: "",
      program3: ""
    };
  }

  nama = e => {
    this.setState({ nama: e.target.value });
  };

  dapil = e => {
    this.setState({ dapil: e.target.value });
  };

  program1 = e => {
    this.setState({ program1: e.target.value });
  };

  program2 = e => {
    this.setState({ program2: e.target.value });
  };

  program3 = e => {
    this.setState({ program3: e.target.value });
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

    this.setState({
      nama: "",
      dapil: null,
      program1: "",
      program2: "",
      program3: ""
    });

    this.props.dataCaleg(detailCaleg);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.submit}>
          <Form.Input
            fluid
            label="Nama"
            placeholder="Nama"
            onChange={this.nama}
            value={this.state.nama}
          />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Pilih Dapil"
          />
          <Form.Input
            fluid
            label="Program Kerja"
            placeholder="Program Kerja 1"
            onChange={this.program1}
            value={this.state.program1}
          />
          <Form.Input
            fluid
            placeholder="Program Kerja 2"
            onChange={this.program2}
            value={this.state.program2}
          />
          <Form.Input
            fluid
            placeholder="Program Kerja 3"
            onChange={this.program3}
            value={this.state.program3}
          />
          <Button type="submit">Submit</Button>
        </Form>
        <Divider />
      </div>
    );
  }
}

export default Forms;
