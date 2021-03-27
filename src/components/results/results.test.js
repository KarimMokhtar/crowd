import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Results from "./index";
import { findByTestAttr } from "../../utils/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const results = {
  results: [
    {
      row: {
        word: "اتصالات",
        variations: [
          "فاتصالات",
          "واتصالات",
          "لاتصالات",
          "باتصالات",
          "اتصالاتي",
          "أتصالات",
          "إتصالات",
          "اتصالاته",
          "كاتصالات",
          "الاتصالات",
        ],
      },
    },
  ],
};
const setup = (props = {}) => {
  return shallow(<Results {...props} />);
};

test("rendering without errors", () => {
  const wrapper = setup(results);
  const component = findByTestAttr(wrapper, "results-container");
  expect(component.length).toBe(1);
});

test("rendering keyword variations", () => {
  const wrapper = setup(results);
  const ele = findByTestAttr(wrapper, "no-results");
  expect(ele.length).not.toBe(1);
});
test("rendering no results when array is empy", () => {
  const wrapper = setup({ results: [] });
  const ele = findByTestAttr(wrapper, "no-results");
  expect(ele.length).toBe(1);
});
