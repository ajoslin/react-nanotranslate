# react-nanotranslate [![Build Status](https://travis-ci.org/ajoslin/react-nanotranslate.svg?branch=master)](https://travis-ci.org/ajoslin/react-nanotranslate)

> React context provider and component for [nanotranslate](https://github.com/ajoslin/nanotranslate)

Set the current dictionary once at the top-level with a provider, and it will pass down via React context.


## Install

```
$ npm install --save react-nanotranslate
```


## Usage

```js
const {Provider, Translate} = require('react-nanotranslate')
const {render} = require('react-dom')

const dictionary = {
  id: 'en_US',
  values: {
    HELLO: 'Hello, {{name}}.'
  }
}

function App () {
  return <Provider dictionary={dictionary}><SomeChild /></Provider>
}

function SomeChild () {
  return <Translate id={'HELLO'} data={{name: 'Bob'}} />
}

render(App, document.body)
// => <span>Hello, Bob.</span>
```
You can see an interactive version of this here: https://codesandbox.io/s/mjY74g73

## API

#### `<Provider>`

Props

- **dictionary** (required): A [nanotranslate](https://github.com/ajoslin/nanotranslate) dictionary. Makes the dictionary available to `<Translate>` components in the hierarchy below.

#### `<Translate>`

Returns a span with a translated string inside of it.

`id` and `data` will be passed to nanotranslate: `translate(id, data)`.

Requires a react-nanotranslate `Provider` as an ancestor.

Props

- **id** (required): The key of translation value in your dictionary.
- **data** (optional, default `undefined`): Data to pass into nanotranslate's templating.
- **tagName** (optional, default `'span'`):  The tag name of the lement that the translated value will be placed in.

All other props (eg `className`) are forwarded to the created element.


## License

MIT © [Andrew Joslin](http://ajoslin.com)
