import { TILE_ROCK } from "../../const/tiles";
import getRandomInRange from "../randomNumber";

const walk = (places, place, go, name) => {
  const map = { 1: "top", 2: "right", 3: "bottom", 4: "left" };
  const to = getRandomInRange(1, 4);
  const current = map[to];
  if (!places[current]) {
    walk(places, place, go, name);
    return;
  }
  if (places[current] !== TILE_ROCK) {
    go(name, place, current);
  }
};
export default walk;
