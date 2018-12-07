import React, { Component } from "react";
import Tools from "./tools";
import Window from "./window";
import Log from "./log";
import Animals from "./animals";
import Property from "./property";

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="app">
        <Tools />
        <Log />
        <Window />
        <Animals />
        <Property />
      </div>
    );
  }
}

export default App;
