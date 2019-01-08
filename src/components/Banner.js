import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="ui red segment">
        {this.props.calegInfo.map((caleg, index) => {
          return (
            <div className="ui cards centered" key={index}>
              <div className="card">
                <div className="content">
                  <div className="header">{caleg.nama}</div>
                  <div className="meta">Dapil : {caleg.dapil}</div>
                  <div className="description">
                    <p>{caleg.program1}</p>
                    <p>{caleg.program2}</p>
                    <p>{caleg.program3}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Banner;
