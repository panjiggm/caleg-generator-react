import React, { Component } from "react";
import { Segment, Message, Card } from "semantic-ui-react";

class Banner extends Component {
  render() {
    return (
      <Segment color="red">
        {this.props.calegInfo.map((caleg, index) => {
          return (
            <Message color="olive" key={index}>
              <div className="header">{caleg.nama}</div>
              <p className="description">Dapil : {caleg.dapil}</p>
              <ul className="list">
                <li>{caleg.program1}</li>
                <li>{caleg.program2}</li>
                <li>{caleg.program3}</li>
              </ul>
            </Message>
          );
        })}
      </Segment>
    );
  }
}

export default Banner;
