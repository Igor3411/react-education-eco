import { TILE_EAT } from "../../const/tiles";
import findFood from "./findFood";
import walk from "./walk";
import starve from "./eating";
import hunger from "./starve";
import getRandomInRange from "../randomNumber";

const step = (
  { place, satiety },
  { places, go, name, death, starvation, eat, newAnimal },
  timerTick
) => {
  switch (true) {
    case satiety <= -5:
      death(name, place);
      clearInterval(timerTick);
      break;
    case places.animals.length === 2 &&
      places.animals.filter(animal => animal !== name)[0].slice(0, 3) ===
        "rab" &&
      satiety > 0 &&
      getRandomInRange(1, 3) === 1:
      newAnimal("rabbit_", place);
      hunger(satiety, starvation, name);
      hunger(satiety, starvation, name);
      walk(places, place, go, name);
      break;
    case places.center !== TILE_EAT && satiety <= 0:
      findFood(places, place, go, name);
      hunger(satiety, starvation, name);
      break;
    case satiety !== 5 && places.center === TILE_EAT:
      starve(eat, name, place);
      break;
    default:
      walk(places, place, go, name);
      hunger(satiety, starvation, name);
      break;
  }
};

export default step;
