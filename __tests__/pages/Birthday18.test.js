import React from "react";
import renderer from "react-test-renderer";

import Birthday18 from "../../pages/Birthday18";

describe("<Birthday18 />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<Birthday18 />).toJSON();
    expect(tree.length).toBe(2);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Birthday18 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
