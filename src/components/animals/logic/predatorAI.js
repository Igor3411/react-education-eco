import { TILE_HILL } from "../../../const/tiles";
import findTarget from "./findTarget";
import findHill from "./findHill";
import gotoTarget from "./gotoTarget";
import walk from "./walk";
import hunger from "./starve";

const step = (
  {
    places,
    go,
    name,
    death,
    starvation,
    setTarget,
    info: { place, satiety, target }
  },
  timerTick
) => {
  switch (true) {
    case satiety <= -10:
      death(name, place);
      clearInterval(timerTick);
      break;
    case places.animals.length > 1:
      const prey = places.animals.filter(animal => animal !== name);
      death(prey[0], place, name);
      break;
    case target === false && places.center === TILE_HILL:
      findTarget(setTarget, name);
      hunger(satiety, starvation, name);
      break;
    case target === false && places.center !== TILE_HILL:
      findHill(places, place, go, name);
      hunger(satiety, starvation, name);
      break;
    case target !== false:
      gotoTarget(places, place, go, name, target);
      hunger(satiety, starvation, name);
      break;
    // eslint-disable-next-line no-fallthrough
    // case places.center !== TILE_EAT && satiety <= 0:
    //     findFood(places, place, go, name)
    //     hunger(satiety, starvation, name);
    //     break;
    // case satiety !== 6 && places.center === TILE_EAT:
    //     eating(eat, name);
    //     break;
    default:
      walk(places, place, go, name);
      hunger(satiety, starvation, name);
      break;
  }
};

export default step;
