import speed from "../logic/speed";

test("speed", () => {
  const input = [{ temperature: 2, timeOfday: "night" }];

  expect(speed(input, "pred")).toBe(0.96);
});
