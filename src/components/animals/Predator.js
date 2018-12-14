import React from "react";
import PropTypes from "prop-types";
import step from "../../utils/logic/predatorAI";

class Predator extends React.PureComponent {
  componentDidMount() {
    this.timerTick = setInterval(() => {
      step(this.props, this.timerTick);
    }, 800);
  }

  componentWillUnmount() {
    clearInterval(this.timerTick);
  }

  propsForRender() {
    const place = {
      transform: [{ scale: 1 }],
      gridRow: this.props.info.place[0] + 1,
      gridColumn: this.props.info.place[1] + 1
    };
    const tang =
      this.props.target && this.props
        ? Math.atan(
            (this.props.target[0] - this.props.info.place[0]) /
              (this.props.target[1] - this.props.info.place[1])
          )
        : 0;
    let angle = (180 * tang) / 3.14;
    if (this.props.target && this.props.target[1] >= this.props.info.place[1]) {
      angle = 180 + angle;
    }

    const satiety = this.props.info.satiety <= 0 ? 0 : this.props.info.satiety;
    const lineTo = { transform: `rotate(${180 + angle}deg)` };
    const eat = {
      height: `${6.6 * satiety + 2}%`
    };
    const classAnimal = `predator e${satiety} death${this.props.info.satiety} ${
      this.props.name
    }`;

    return { place, lineTo, eat, classAnimal };
  }

  render() {
    const propsRender = this.propsForRender();
    return (
      <div className={propsRender.classAnimal} style={propsRender.place}>
        <div className="eat" style={propsRender.eat} />
        <div className="line" style={propsRender.lineTo} />
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
