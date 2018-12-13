import React from "react";
import PropTypes from "prop-types";

class Log extends React.PureComponent {
  render() {
    return (
      <div className="log">
        {this.props.arr.map((entry, i) => (
          <p key={`log_${i}`}>{entry}</p>
        ))}
      </div>
    );
  }
}
Log.propTypes = {
  log: PropTypes.object.isRequired
};
export default Log;
