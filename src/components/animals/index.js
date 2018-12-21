/* eslint-disable no-shadow */
import React from "react";
import { connect } from "react-redux";
import Rabbit from "./Rabbit";
import Predator from "./Predator";
import go from "../../actions/animals/go";
import death from "../../actions/animals/death";
import eat from "../../actions/animals/eat";
import starvation from "../../actions/animals/starvation";
import setTarget from "../../actions/animals/setTarget";
import newAnimal from "../../actions/animals/newAnimal";

const infoPlace = (world, animal) => {
  const y = animal.place[0];
  const x = animal.place[1];
  return {
    center: world.world.map[y][x],
    top: world.world.map[y - 1] ? world.world.map[y - 1][x] : NaN,
    right: world.world.map[y][x + 1] ? world.world.map[y][x + 1] : NaN,
    bottom: world.world.map[y + 1] ? world.world.map[y + 1][x] : NaN,
    left: world.world.map[y][x - 1] ? world.world.map[y][x - 1] : NaN,
    animals: world.animalsLocation[y][x]
  };
};

const targetPredator = (targetName, animals) =>
  targetName && animals[targetName]
    ? animals[targetName].information.place
    : undefined;

const newPredator = (
  { animals, go, world, death, eat, starvation, setTarget, newAnimal },
  name
) => (
  <Predator
    places={infoPlace(world, animals[name].information)}
    go={go}
    eat={eat}
    starvation={starvation}
    death={death}
    setTarget={setTarget}
    newAnimal={newAnimal}
    info={animals[name].information}
    name={name}
    target={targetPredator(animals[name].information.target, animals)}
    key={name}
    events={world.world.events}
  />
);
const newRabbit = (
  { animals, go, world, death, eat, starvation, newAnimal },
  name
) => (
  <Rabbit
    places={infoPlace(world, animals[name].information)}
    go={go}
    newAnimal={newAnimal}
    eat={eat}
    starvation={starvation}
    death={death}
    info={animals[name].information}
    name={name}
    key={name}
    events={world.world.events}
  />
); // вынести
const animalsListCreate = props =>
  Object.entries(props.animals).map(([i]) => {
    switch (true) {
      case i.slice(0, 3) === "pre":
        return newPredator(props, i);
      case i.slice(0, 3) === "rab":
        return newRabbit(props, i);
      default:
        return false;
    }
  });

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
  eat: name => dispatch(eat(name)),
  starvation: (satiety, name) => dispatch(starvation(satiety, name)),
  setTarget: name => dispatch(setTarget(name)),
  newAnimal: (name, place) => dispatch(newAnimal(name, place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsContainer);
