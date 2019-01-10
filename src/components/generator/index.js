import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";

import Navbar from "../Navbar";
import Heading from "./Heading";
import Footer from "./Footer";
import Forms from "./Forms";
import Banner from "./Banner";

class Body extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  submit = caleg => {
    this.setState(state => ({ data: state.data.concat(caleg) }));
  };

  removeBanner = bannerCaleg => {
    const newBanner = this.state.data.filter((banner, index) => {
      return index !== bannerCaleg;
    });

    this.setState({
      data: newBanner
    });
  };

  render() {
    return (
      <Container>
        <Navbar />
        <Heading />
        <Grid centered columns={2}>
          <Grid.Column>
            <h4>{this.props.title}</h4>
            <Forms dataCaleg={this.submit} />
            <Banner
              calegInfo={this.state.data}
              deleteBanner={this.removeBanner}
            />
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    );
  }
}

export default Body;
