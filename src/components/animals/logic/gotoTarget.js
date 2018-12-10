import { TILE_ROCK } from "../../../const/tiles";

const gotoTarget = (places, place, go, name, target) => {
  console.log(place[0], target[0])
  switch (true){
    case place[0] !== target[0]:
      if (places.top && places.top !== TILE_ROCK && place[0] > target[0]) {
       go(name, place, "top");
       break;
      }
      else {
        if (places.bottom && places.bottom !== TILE_ROCK){
          go(name, place, "bottom");  //словарик направлений
          break
        }
      }
    case place[1] !== target[1]:
      if (places.left && places.left !== TILE_ROCK && place[1] > target[1]) {
        go(name, place, "left");
         break
        }
      else if (places.right && places.right !== TILE_ROCK) {
        go(name, place, "right");
        break
      };
    default:
    break;
  }
};
export default gotoTarget;
