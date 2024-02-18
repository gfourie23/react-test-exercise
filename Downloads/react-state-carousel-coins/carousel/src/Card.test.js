import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card ";
import TEST_IMAGES from "./_testCommon.js";

it('renders without crashing', function () {
  render (<Card />);
});

it('mathces snapshot', function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});