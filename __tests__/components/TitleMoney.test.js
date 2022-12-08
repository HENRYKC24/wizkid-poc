import React from "react";
import renderer from "react-test-renderer";

import TitleMoney from "../../components/TitleMoney";

describe("<TitleMoney />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<TitleMoney />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<TitleMoney />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
