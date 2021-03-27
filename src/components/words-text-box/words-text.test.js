import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import WordsTextBox from "./index";
import { findByTestAttr } from "../../utils/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<WordsTextBox {...props} />);
};
test("rendering without errors", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "words-text-container");
  expect(component.length).toBe(1);
});

test("rendering one box when boolean true", () => {
  const wrapper = setup({
    type: "AND",
    booleanQuery: true,
  });
  const ele = findByTestAttr(wrapper, "true-query-text");
  expect(ele.length).toBe(1);
});

test("rendering three boxes when boolean false", () => {
  const wrapper = setup({
    type: "AND",
    booleanQuery: false,
  });
  const ele = findByTestAttr(wrapper, "false-query-text");
  expect(ele.length).toBe(1);
});
