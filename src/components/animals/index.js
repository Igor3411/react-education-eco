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

const slice = (world, animal) => {
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

const slicePredator = (targetName, animals) => targetName ? animals[targetName].information.place : false;

class AnimalsContainer extends React.Component {
  render() {
    const items = [
      "rabbit_1",
      "rabbit_2",
      "rabbit_3",
      "rabbit_4",
      "predator_1"
    ];

    const {
      animals,
      go,
      world,
      death,
      eat,
      starvation,
      setTarget
    } = this.props;
    return (
      <div className="animals">
        <Predator
          places={slice(world, animals.predator_1.information)}
          go={go}
          eat={eat}
          starvation={starvation}
          death={death}
          setTarget={setTarget}
          info={animals.predator_1.information}
          name={items[4]}
          target={slicePredator(animals.predator_1.information.target, animals)}
        />
        <Rabbit
          places={slice(world, animals.rabbit_1.information)}
          go={go}
          eat={eat}
          starvation={starvation}
          death={death}
          info={animals.rabbit_1.information}
          name={items[0]}
        />
        <Rabbit
          places={slice(world, animals.rabbit_2.information)}
          go={go}
          eat={eat}
          starvation={starvation}
          death={death}
          info={animals.rabbit_2.information}
          name={items[1]}
        />
        <Rabbit
          places={slice(world, animals.rabbit_3.information)}
          go={go}
          eat={eat}
          starvation={starvation}
          death={death}
          info={animals.rabbit_3.information}
          name={items[2]}
        />
        <Rabbit
          places={slice(world, animals.rabbit_4.information)}
          go={go}
          eat={eat}
          starvation={starvation}
          death={death}
          info={animals.rabbit_4.information}
          name={items[3]}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  animals: store.animals,
  world: store.world
});

const mapDispatchToProps = dispatch => ({
  go: (name, place, goto) => dispatch(go(name, place, goto)),
  death: (name, place, killer) => dispatch(death(name, place, killer)),
  eat: name => dispatch(eat(name)),
  starvation: (satiety, name) => dispatch(starvation(satiety, name)),
  setTarget: name => dispatch(setTarget(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsContainer);
