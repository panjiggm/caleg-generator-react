import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="ui red segment">
        {this.props.calegInfo.map((caleg, index) => {
          return (
            <div className="ui olive message" key={index}>
              <div className="header">{caleg.nama}</div>
              <p className="description">Dapil : {caleg.dapil}</p>
              <ul className="list">
                <li>{caleg.program1}</li>
                <li>{caleg.program2}</li>
                <li>{caleg.program3}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Banner;
