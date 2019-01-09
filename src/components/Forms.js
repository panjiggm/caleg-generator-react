import React, { Component } from "react";

import { Button, Form } from "semantic-ui-react";

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
          <Form.Field>
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              placeholder="Nama"
              onChange={this.nama}
              value={this.state.nama}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="name">Dapil</label>
            <select className="ui fluid search dropdown" onChange={this.dapil}>
              <option defaultValue>--Pilih Dapil--</option>
              <option value="Wakanda">Wakanda</option>
              <option value="Asgard">Asgard</option>
              <option value="Marineford">Marineford</option>
              <option value="Cybertron">Cybertron</option>
              <option value="Konoha">Konoha</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label htmlFor="program"> Program Kerja </label>
            <input
              type="text"
              id="program1"
              placeholder="Program Kerja 1"
              onChange={this.program1}
              value={this.state.program1}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              id="program2"
              placeholder="Program Kerja 2"
              onChange={this.program2}
              value={this.state.program2}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              id="program3"
              placeholder="Program Kerja 3"
              onChange={this.program3}
              value={this.state.program3}
            />
          </Form.Field>
          <Button className="ui button" type="submit">
            Submit
          </Button>
        </Form>
        <div className="ui dividing header" />
      </div>
    );
  }
}

export default Forms;
