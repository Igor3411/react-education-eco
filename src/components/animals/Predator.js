import React from "react";
import PropTypes from "prop-types";
import step from "./logic/predatorAI";

class Predator extends React.PureComponent {
  componentDidMount() {
    this.timerTick = setInterval(() => {
      step(this.props, this.timerTick);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerTick);
  }

  render() {
    const place = {
      transform: [{ scale: 1 }],
      gridRow: this.props.info.place[0] + 1,
      gridColumn: this.props.info.place[1] + 1
    };
    const satiety = this.props.info.satiety <= 0 ? 0 : this.props.info.satiety;
    const eat = {
      height: `${8.2 * satiety + 2  }%`
    };
    const classAnimal = `predator e${satiety} death${this.props.info.satiety} ${
      this.props.name
    }`;
    return (
      <div className={classAnimal} style={place}>
        <div className="eat" style={eat} />
        <div className="animals_number">
          {this.props.places.animals.length
            ? this.props.places.animals.length
            : "1"}
        </div>
      </div>
    );
  }
}

Predator.propTypes = {
  places: PropTypes.object.isRequired,
  go: PropTypes.func.isRequired,
  death: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default Predator;
