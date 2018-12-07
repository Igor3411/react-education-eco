import { TILE_ROCK } from "../../../const/tiles";

const gotoTarget = (places, place, go, name, target) => {
  if (places[0] !== target[0]) {
    if (places[0] > target[0]) {
      if (places.top !== TILE_ROCK) go(name, place, "top");
    } else if (places.bottom !== TILE_ROCK) go(name, place, "bottom");
  } else if (places[1] > target[1]) {
    if (places.left !== TILE_ROCK) go(name, place, "left");
  } else if (places.right !== TILE_ROCK) go(name, place, "right");
};
export default gotoTarget;
