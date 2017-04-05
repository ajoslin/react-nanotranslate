# react-nanotranslate [![Build Status](https://travis-ci.org/ajoslin/react-nanotranslate.svg?branch=master)](https://travis-ci.org/ajoslin/react-nanotranslate)

> React context provider and component for [nanotranslate](github.com/ajoslin/nanotranslate)

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

## API

#### `<Provider dictionary>`

Makes the dictionary available to `<Translate>` components in the hierarchy below.

#### `<Translate id data>`

Returns a span with a translated string inside of it.  Requires that the be defined as an ancestor.

`id` and `data` will be passed to nanotranslate as `translate(id, data)`.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
