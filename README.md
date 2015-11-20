# magic-virtual-element

[![version](https://img.shields.io/npm/v/magic-virtual-element.svg?style=flat-square)](https://www.npmjs.com/package/magic-virtual-element) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

A library for building virtual tree elements, with enhanced support for class and style properties.

```
npm install magic-virtual-element
```

You can also use Duo, Bower or [download the files manually](https://github.com/dekujs/magic-virtual-element/releases).

## Top-Level API

```js
element(component: string|Function , [props: object], [...children: Array]): Component
```

## Example
```js
import element from 'magic-virtual-element';

let divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

element('div', { class: ["App", "foo", "bar"], style: divStyle }, [
  element('button', { class: "Button" }, 'Click Me!')
]);
```

See https://github.com/dekujs/deku#virtual-elements
