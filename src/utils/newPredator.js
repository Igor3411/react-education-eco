import React from "react";
import Predator from "../components/animals/Predator";
import infoPlace from "./infoPlace";
import targetPredator from "./targetPredator";

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

export default newPredator;
