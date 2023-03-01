import { Component } from "react";
import React from "react";

class Nav extends Component {
  render(): React.ReactElement {
    return (
      <div className="h-16 px-16 py-5 border-b ">
        <h1 className="text-xl font-bold text-gray-800 ">XTodo</h1>
      </div>
    );
  }
}

export default Nav