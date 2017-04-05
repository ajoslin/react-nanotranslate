'use strict'

global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator

var test = require('tape')
var h = require('react-hyperscript')
var Provider = require('./provider')
var Translate = require('./translate')
var {mount} = require('enzyme')

var dictionary = {
  id: 'en_US',
  values: {
    HELLO: 'Hello, {{name}}.'
  }
}

test('it works', function (t) {
  var wrapper = mount(
    h(Provider, {dictionary}, [
      h(Translate, {
        id: 'HELLO',
        data: {name: 'robot'}
      })
    ])
  )

  t.equal(wrapper.html(), '<span>Hello, robot.</span>')
  t.end()
})

test('fail without context', function (t) {
  t.throws(
    () => mount(h(Translate, {
      id: 'HELLO',
      data: {name: 'robot'}
    }))
  )
  t.end()
})
