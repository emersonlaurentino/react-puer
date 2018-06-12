import puer from './react-puer';
import chai, { expect } from 'chai';

it('should default export be a function', () => {
  expect(puer).to.be.a('function');
});

it('should first argument be an object', () => {
  const component = { children: name => name };

  expect(puer(component, { name: 'puer' })).to.be.a('object');
});

it('should second argument be an object', () => {
  const component = { children: name => name };
  const props = { name: 'puer' };

  expect(puer(component, props)).to.be.a('object');
  expect(props).to.be.a('object');
});

it('should contain a `children` property in the first argument, if provided', () => {
  const component = { children: name => name };
  const props = { name: 'puer' };

  expect(puer(component, props)).to.be.a('object');
  expect(component).to.have.property('children');
});

it('should contain a `render` property in the first argument, if provided', () => {
  const component = { render: name => name };
  const props = { name: 'puer' };

  expect(puer(component, props)).to.be.a('object');
  expect(component).to.have.property('render');
});

it('should contain `props` as the second argument, if provided', () => {
  const component = { render: name => name };
  const props = { name: 'puer' };

  expect(puer(component, props)).to.be.a('object');
  expect(props)
    .to.have.property('name')
    .that.deep.equals('puer');
});

it('should throw if no `children` or `render` property is provided', () => {
  expect(() => puer()).to.throw(
    '[react-puer]: You need pass an object with a `children` or `render` property'
  );
});

it("should throw if `children` is provided, but it's not a function", () => {
  expect(() => puer({ children: 'children' })).to.throw(
    '[react-puer]: `children` must be a function'
  );
});

it("should throw if `render` is provided, but it's not a function", () => {
  expect(() => puer({ render: 'render' })).to.throw(
    '[react-puer]: `render` must be a function'
  );
});

it("should throw if `props` is provided, but it's not an object", () => {
  const component = { children: name => name };

  expect(() => puer(component, 'props')).to.throw(
    '[react-puer]: `props` must be an object'
  );
});
