import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label htmlFor="name">Nama</label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="name">Dapil</label>
            <select className="ui fluid search dropdown" id="">
              <option value="Wakanda">Wakanda</option>
              <option value="Asgard">Asgard</option>
              <option value="Cybertron">Cybertron</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="program"> Program Kerja </label>
            <input type="text" />
          </div>
          <div className="field">
            <input type="text" />
          </div>
          <div className="field">
            <input type="text" />
          </div>
          <input className="ui button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
