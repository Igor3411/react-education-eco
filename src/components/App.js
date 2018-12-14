import React, { Component } from "react";
import { Route } from "react-router-dom";
import Tools from "./tools";
import Window from "./window";
import Log from "./log";
import Animals from "./animals";
import Property from "./property";
import Maps from "./maps";

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="app">
        <Route path="/" component={Tools} />
        <Route exact path="/" component={Log} />
        <Route exact path="/" component={Window} />
        <Route exact path="/" component={Animals} />
        <Route exact path="/" component={Property} />
        <Route path="/Maps" component={Maps} />
      </div>
    );
  }
}

export default App;
