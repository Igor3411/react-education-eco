import React from "react";
import { Link } from "react-router-dom";

export default class Maps extends React.PureComponent {
  calc = () => "";

  render() {
    return (
      <div className="tools">
        {this.calc()}
        <Link to="/">Вернуться назад</Link>
      </div>
    );
  }
}
