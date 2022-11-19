import React, { Component } from "react";
import Body from "./Body";
import Nav from "./Nav";

class App extends Component {
  render(): React.ReactNode {
    return <div className="">
      <Nav />
      <Body />
    </div>;
  }
}

export default  App
