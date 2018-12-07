import { TILE_HILL } from "../../../const/tiles";
import walk from "./walk";

const findHill = (places, place, go, name) => {
  switch (true) {
    case places.top && places.top === TILE_HILL:
      go(name, place, "top");
      break;
    case places.bottom && places.bottom === TILE_HILL:
      go(name, place, "bottom");
      break;
    case places.left && places.left === TILE_HILL:
      go(name, place, "left");
      break;
    case places.right && places.right === TILE_HILL:
      go(name, place, "right");
      break;
    default:
      walk(places, place, go, name);
  }
};

export default findHill;
