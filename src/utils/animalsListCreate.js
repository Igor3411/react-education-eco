import newRabbit from "./newRabbit";
import newPredator from "./newPredator";

const animalsListCreate = props =>
  Object.entries(props.animals).map(([i]) => {
    switch (true) {
      case i.slice(0, 3) === "pre":
        return newPredator(props, i);
      case i.slice(0, 3) === "rab":
        return newRabbit(props, i);
      default:
        return false;
    }
  });

export default animalsListCreate;
