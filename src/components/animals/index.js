/* eslint-disable no-shadow */
import React from "react";
import { connect } from "react-redux";
import animalsListCreate from "../../utils/animalsListCreate";
import go from "../../actions/animals/go";
import death from "../../actions/animals/death";
import eat from "../../actions/animals/eat";
import starvation from "../../actions/animals/starvation";
import setTarget from "../../actions/animals/setTarget";
import newAnimal from "../../actions/animals/newAnimal";

const AnimalsContainer = ({
  animals,
  go,
  world,
  death,
  eat,
  newAnimal,
  starvation,
  setTarget
}) => (
  <div className="animals">
    {animalsListCreate({
      animals,
      go,
      newAnimal,
      world,
      death,
      eat,
      starvation,
      setTarget
    })}
  </div>
);

const mapStateToProps = store => ({
  animals: store.animals,
  world: store.world
});

const mapDispatchToProps = dispatch => ({
  go: (name, place, goto) => dispatch(go(name, place, goto)),
  death: (name, place, killer) => dispatch(death(name, place, killer)),
  eat: (name, place) => dispatch(eat(name, place)),
  starvation: (satiety, name) => dispatch(starvation(satiety, name)),
  setTarget: name => dispatch(setTarget(name)),
  newAnimal: (name, place) => dispatch(newAnimal(name, place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsContainer);
