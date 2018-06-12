const NODE_ENV = process.env.NODE_ENV;

const isFunction = prop => typeof prop === "function";

const warn = (condition, message) =>
  condition && console.warn(`[react-puer]: ${message}`);

export default ({ children, render }, ...props) => {
  warn(
    NODE_ENV !== "production" && isFunction(children) && isFunction(render),
    "You cant use children and render, so only children will be used."
  );

  const reactPuer = isFunction(children) ? children : render;

  return reactPuer(...props);
};
