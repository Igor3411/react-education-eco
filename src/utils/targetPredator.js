const targetPredator = (targetName, animals) =>
  targetName && animals[targetName]
    ? animals[targetName].information.place
    : undefined;

export default targetPredator;
