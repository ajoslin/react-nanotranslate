'use strict'

var React = require('react')

module.exports = Translate

Translate.contextTypes = {
  translate: React.PropTypes.func.isRequired
}

Translate.propTypes = {
  id: React.PropTypes.string.isRequired,
  data: React.PropTypes.object
}

function Translate (props, context) {
  return React.createElement(
    'span',
    null,
    context.translate(props.id, props.data)
  )
}
