import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import ResultsRow from "./index";
import { findByTestAttr } from "../../utils/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const sampleVariationRow = {
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
};
const setup = (props = {}) => {
  return shallow(<ResultsRow {...props} />);
};
const wrapper = setup({
  row: { ...sampleVariationRow },
  booleanQuery: true,
});
test("rendering without errors", () => {
  const component = findByTestAttr(wrapper, "results-row-container");
  expect(component.length).toBe(1);
});

test("rendering word of variation", () => {
  const ele = findByTestAttr(wrapper, "rendering-row-word");
  expect(ele.length).toBe(1);
});

test("render vartiations row", () => {
  const ele = findByTestAttr(wrapper, "variations-container");
  expect(ele.length).toBe(1);
});

