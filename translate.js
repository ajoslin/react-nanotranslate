'use strict'

var React = require('react')
var PropTypes = require('prop-types')
var TRANSLATE_PROPS = {
  id: true,
  data: true,
  tagName: true
}

module.exports = Translate

Translate.contextTypes = {
  translate: PropTypes.func.isRequired
}

Translate.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
  tagName: PropTypes.string
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
