import React from "react";
import renderer from "react-test-renderer";

import Transactions from "../../components/Transactions";

describe("<Transactions />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Transactions />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Transactions />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
