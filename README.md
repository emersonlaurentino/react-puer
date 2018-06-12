<h1 align="center">
  <br><img src="./logo.png" alt="React Puer">
  <br>
  React Puer
  <br>
</h1>
<h4 align="center">A small function to create <a href="https://reactjs.org/docs/render-props.html" target="_blank">Render Props</a>.</h4>

<p align="center">
  <a href="https://www.npmjs.org/package/react-puer"><img src="https://img.shields.io/npm/v/react-puer.svg?style=flat" alt="npm"></a>
  <a href="https://travis-ci.org/emersonlaurentino/react-puer"><img src="https://travis-ci.org/emersonlaurentino/react-puer.svg?branch=master" alt="travis"></a>
  <a href="https://david-dm.org/emersonlaurentino/react-puer"><img src="https://david-dm.org/emersonlaurentino/react-puer/status.svg" alt="dependencies Status"></a>
  <a href="https://unpkg.com/react-puer/dist/react-puer.umd.js"><img src="http://img.badgesize.io/https://unpkg.com/react-puer/dist/react-puer.umd.js?compression=gzip" alt="gzip size"></a>
  <a href="https://packagephobia.now.sh/result?p=react-puer"><img src="https://packagephobia.now.sh/badge?p=react-puer" alt="install size"></a>
</p>

# Install

```
yarn add react-puer
```

```
npm i react-puer
```

## UMD

```
<script src="https://unpkg.com/react-puer/dist/react-puer.umd.js"></script>
```

## Example

```jsx
import puer from "react-puer";

const Component = props => {
  const { children, render, ...prop } = props;

  return puer({ children, render }, prop);
};

// render
<Component
  name="Emerson"
  lastName="Laurentino"
  render={({ name, lastName }) => `Hi, i'm ${name} ${lastName} :)`}
/>

// children
<Component name="Emerson" lastName="Laurentino">
  {({ name, lastName }) => `Hi, i'm ${name} ${lastName} :)`}
</Component>
```

## Credit

Thanks [@renatorib_](https://twitter.com/renatorib_) for write renderProps on [React Powerplug](https://github.com/renatorib/react-powerplug).

## License

MIT

---

> [elaurent.org](http://elaurent.org) &nbsp;&middot;&nbsp;
> GitHub [@emersonlaurentino](https://github.com/emersonlaurentino) &nbsp;&middot;&nbsp;
> Twitter [@elaurent\_](https://twitter.com/elaurent_)
