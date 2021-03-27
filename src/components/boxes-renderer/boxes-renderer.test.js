import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Boxes from "./index";
import { findByTestAttr } from "../../utils/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Boxes {...props} />);
};

test("rendering one box when results boolean is true", () => {
  const wrapper = setup({ booleanQuery: true });
  const ele = findByTestAttr(wrapper, "true-boolean");
  expect(ele.length).toBe(1);
});
test("rendering no results when array is empy", () => {
  const wrapper = setup({ booleanQuery: false });
  const ele = findByTestAttr(wrapper, "false-boolean");
  expect(ele.length).toBe(3);
});
