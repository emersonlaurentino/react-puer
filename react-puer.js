const { NODE_ENV } = process.env;

const isFunction = prop => typeof prop === 'function';
const isObject = prop => typeof prop === 'object';

const warn = (condition, message) =>
  condition && console.warn(`[react-puer]: ${message}`);

const error = (condition, message) => {
  if (condition) {
    throw new Error(`[react-puer]: ${message}`);
  }
};

export default ({ children, render } = {}, props = {}) => {
  error(
    !children && !render,
    'You need pass an object with a `children` or `render` property'
  );
  error(children && !isFunction(children), '`children` must be a function');
  error(render && !isFunction(render), '`render` must be a function');
  error(props && !isObject(props), '`props` must be an object');

  warn(
    NODE_ENV !== 'production' && isFunction(children) && isFunction(render),
    "You can't use children and render, so only children will be used"
  );

  const reactPuer = isFunction(children) ? children : render;

  return reactPuer(props);
};
