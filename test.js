'use strict'

global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator

var test = require('tape')
var h = require('react-hyperscript')
var Provider = require('./provider')
var Translate = require('./translate')
var TranslateRaw = require('./translate-raw')
var {mount} = require('enzyme')

var dictionary = {
  id: 'en_US',
  values: {
    HELLO: 'Hello, {{name}}.'
  }
}

test('it works', t => {
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

test('fail without context', t => {
  t.throws(
    () => mount(h(Translate, {
      id: 'HELLO',
      data: {name: 'robot'}
    }))
  )
  t.end()
})

test('allow custom tagName and other props', t => {
  var wrapper = mount(
    h(Provider, {dictionary}, [
      h(Translate, {
        tagName: 'article',
        className: 'my-class',
        id: 'HELLO',
        data: {name: 'robot'}
      })
    ])
  )

  t.equal(wrapper.html(), '<article class="my-class">Hello, robot.</article>')
  t.end()
})

test('TranslateRaw', t => {
  var wrapper = mount(
    h(Provider, {dictionary}, [
      h(TranslateRaw, null, (translate) => {
        t.equal(typeof translate, 'function')
        return h('.foo', translate('HELLO', {name: 'world'}))
      })
    ])
  )

  t.equal(wrapper.html(), '<div class="foo">Hello, world.</div>')
  t.end()
})
