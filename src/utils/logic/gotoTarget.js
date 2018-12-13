import { TILE_ROCK } from "../../const/tiles";
import { COURSE_LIST } from "../../const/const";
import walk from "./walk";

const gotoTarget = (places, place, go, name, target = false) => {
  switch (true) {
    // case place[0] !== target[0]:
    //   if (place[0] > target[0] && places.top !== TILE_ROCK) {
    //     go(name, place, COURSE_LIST[0]);
    //     break;
    //   } else if (places.bottom !== TILE_ROCK) {
    //     go(name, place, COURSE_LIST[2]); // словарик направлений
    //     break;
    //   }
    // case place[1] !== target[1]:
    //   if (place[1] > target[1] && places.left !== TILE_ROCK) {
    //     go(name, place, COURSE_LIST[3]);
    //     break;
    //   } else if (places.right !== TILE_ROCK) {
    //     go(name, place, COURSE_LIST[1]);
    //     break;
    //   }
    case place[0] > target[0] && places.top !== TILE_ROCK:
      go(name, place, COURSE_LIST[0]);
      break;
    case place[0] < target[0] && places.bottom !== TILE_ROCK:
      go(name, place, COURSE_LIST[2]);
      break;
    case place[1] > target[1] && places.left !== TILE_ROCK:
      go(name, place, COURSE_LIST[3]);
      break;
    case place[1] < target[1] && places.right !== TILE_ROCK:
      go(name, place, COURSE_LIST[1]);
      break;
    default:
      walk(places, place, go, name);
      break;
  }
};
export default gotoTarget;
