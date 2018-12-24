import React from "react";
import Rabbit from "../components/animals/Rabbit";
import infoPlace from "./infoPlace";

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
);

export default newRabbit;
