import React, { Component } from "react";
import Body from "./Component/Body"; 
import Nav from "./Component/UI-Component/Nav"; 

class App extends Component {
  render(): React.ReactNode {
    return <div className="">
      <Nav />
      <Body />
    </div>;
  }
}

export default  App
