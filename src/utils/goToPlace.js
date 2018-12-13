const goToPlace = (name, place, goto) => {
  switch (goto) {
    case "top":
      return {
        goto: [place[0] - 1, place[1]],
        gotoX: place[1],
        gotoY: place[0] - 1,
        gofromX: place[1],
        gofromY: place[0],
        gofrom: [place[0], place[1]],
        name
      };
    case "bottom":
      return {
        goto: [place[0] + 1, place[1]],
        gotoX: place[1],
        gotoY: place[0] + 1,
        gofromX: place[1],
        gofromY: place[0],
        name
      };
    case "left":
      return {
        goto: [place[0], place[1] - 1],
        gotoX: place[1] - 1,
        gotoY: place[0],
        gofromX: place[1],
        gofromY: place[0],
        gofrom: [place[0], place[1]],
        name
      };
    case "right":
      return {
        goto: [place[0], place[1] + 1],
        gotoX: place[1] + 1,
        gotoY: place[0],
        gofromX: place[1],
        gofromY: place[0],
        gofrom: [place[0], place[1]],
        name
      };
    default:
      break;
  }
};

export default goToPlace;
