const speed = ([{ temperature, timeOfday }], type) => {
  let x = 1;
  if (timeOfday === "night") {
    x *= 1.2;
  }
  if (type === "pred") {
    x *= 0.8;
  }
  if (temperature <= 0) {
    x *= 1.1;
  }
  return x;
};

export default speed;
