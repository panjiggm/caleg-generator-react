import React, { Component } from "react";
import { Segment, Message, Divider } from "semantic-ui-react";

class Banner extends Component {
  render() {
    return (
      <Segment color="red">
        {this.props.calegInfo.map((caleg, index) => {
          return (
            <Message color="olive" key={index}>
              <i
                className="close icon"
                onClick={() =>
                  window.confirm("Are u sure ?")
                    ? this.props.deleteBanner(index)
                    : false
                }
              />
              <Message.Header>{caleg.nama}</Message.Header>
              <Divider />
              <div>Dapil : {caleg.dapil}</div>
              <Message.List>
                <Message.Item>{caleg.program1}</Message.Item>
                <Message.Item>{caleg.program2}</Message.Item>
                <Message.Item>{caleg.program3}</Message.Item>
              </Message.List>
            </Message>
          );
        })}
      </Segment>
    );
  }
}

export default Banner;
