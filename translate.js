'use strict'

var React = require('react')
var TRANSLATE_PROPS = {
  id: true,
  data: true,
  tagName: true
}

module.exports = Translate

Translate.contextTypes = {
  translate: React.PropTypes.func.isRequired
}

Translate.propTypes = {
  id: React.PropTypes.string.isRequired,
  data: React.PropTypes.object,
  tagName: React.PropTypes.string
}

function Translate (props, context) {
  var elementProps = {}
  for (var key in props) {
    if (key in TRANSLATE_PROPS) continue
    elementProps[key] = props[key]
  }

  return React.createElement(
    ('tagName' in props) ? props.tagName : 'span',
    elementProps,
    context.translate(props.id, props.data)
  )
}
