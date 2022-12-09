import React from "react";
import renderer from "react-test-renderer";

import RequestSend from "../../components/RequestSend";

describe("<RequestSend />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<RequestSend />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<RequestSend />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
