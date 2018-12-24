const infoPlace = (world, animal) => {
  const y = animal.place[0];
  const x = animal.place[1];
  return {
    center: world.world.map[y][x],
    top: world.world.map[y - 1] ? world.world.map[y - 1][x] : NaN,
    right: world.world.map[y][x + 1] ? world.world.map[y][x + 1] : NaN,
    bottom: world.world.map[y + 1] ? world.world.map[y + 1][x] : NaN,
    left: world.world.map[y][x - 1] ? world.world.map[y][x - 1] : NaN,
    animals: world.animalsLocation[y][x]
  };
};
export default infoPlace;
