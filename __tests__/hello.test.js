import Hello from "../src/components/Hello";
import React from "react";
import { shallow , configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
test("test hello world", () => {
  let app = shallow(<Hello/>);
  let test = app.find("h1").text();
  expect(test).toBe('hello world')
});
