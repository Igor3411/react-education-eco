import { TILE_EAT } from "../../const/tiles";
import walk from "./walk";

const findFood = (places, place, go, name) => {
  switch (true) {
    case places.top && places.top === TILE_EAT:
      go(name, place, "top");
      break;
    case places.bottom && places.bottom === TILE_EAT:
      go(name, place, "bottom");
      break;
    case places.left && places.left === TILE_EAT:
      go(name, place, "left");
      break;
    case places.right && places.right === TILE_EAT:
      go(name, place, "right");
      break;
    default:
      walk(places, place, go, name);
  }
};

export default findFood;
