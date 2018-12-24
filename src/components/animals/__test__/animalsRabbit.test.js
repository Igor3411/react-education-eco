import React from "react";
import { shallow } from "enzyme";
import Rabbit from "../Rabbit";

test("RABBIT --- number of animals", () => {
  const places = {
    animals: ["Rabbit", "Predator"]
  };
  const output = "2";
  const info = {
    place: [0, 0]
  };
  const name = "Rabbit_1";
  const events = [
    {
      temperature: 2,
      timeOfday: "day"
    }
  ];
  const go = () => {};
  const death = () => {};

  const component = shallow(
    <Rabbit
      info={info}
      places={places}
      go={go}
      death={death}
      name={name}
      events={events}
    />
  );

  expect(component.find(".animals_number").text()).toEqual(output);
});
