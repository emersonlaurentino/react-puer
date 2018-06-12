import puer from "./react-puer";
import chai, { expect } from "chai";

it("should default export be a function", () => {
  expect(puer).to.be.a("function");
});

it("should first argument be a object", () => {
  const component = { children: name => name };

  expect(puer(component, { name: "puer" })).to.be.a("object");
});

it("should second argument be a object", () => {
  const component = { children: name => name };
  const props = { name: "puer" };

  expect(puer(component, props)).to.be.a("object");
  expect(props).to.be.a("object");
});

it("should prop of first argument be children", () => {
  const component = { children: name => name };
  const props = { name: "puer" };

  expect(puer(component, props)).to.be.a("object");
  expect(component).to.have.property('children');
});

it("should prop of first argument be render", () => {
  const component = { render: name => name };
  const props = { name: "puer" };

  expect(puer(component, props)).to.be.a("object");
  expect(component).to.have.property('render');
});

it("should prop name of second argument be puer", () => {
  const component = { render: name => name };
  const props = { name: "puer" };

  expect(puer(component, props)).to.be.a("object");
  expect(props).to.have.property('name').that.deep.equals('puer');
});
