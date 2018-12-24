import findFood from "../logic/findFood";
import { TILE_EAT } from "../../const/tiles";

test("findFood", () => {
  const places = {
    top: undefined,
    bottom: TILE_EAT,
    left: "EMPTY",
    right: TILE_EAT
  };
  const name = "Rabbit_1";
  const place = [1, 1];
  const go = jest.fn();
  findFood(places, place, go, name);
  expect(go).toBeCalledWith("Rabbit_1", place, "bottom");
});
