import eating from "../logic/eating";

test("eating", () => {
  const eat = jest.fn();
  eating(eat, "Rabbit_1");

  expect(eat).toBeCalledWith("Rabbit_1");
});
