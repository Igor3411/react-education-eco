import { TILE_EAT } from "../../../const/tiles";
import findFood from "./findFood";
import walk from "./walk";
import starve from "./eating";
import hunger from "./starve";

const step = (
  { place, satiety },
  { places, go, name, death, starvation, eat },
  timerTick
) => {
  switch (true) {
    case satiety <= -5:
      death(name, place);
      clearInterval(timerTick);
      break;
    case places.center !== TILE_EAT && satiety <= 0:
      findFood(places, place, go, name);
      hunger(satiety, starvation, name);
      break;
    case satiety !== 5 && places.center === TILE_EAT:
      starve(eat, name);
      break;
    default:
      walk(places, place, go, name);
      hunger(satiety, starvation, name);
      break;
  }
};

export default step;
