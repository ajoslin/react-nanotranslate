'use strict'

var PropTypes = require('prop-types')

module.exports = TranslateRaw

TranslateRaw.contextTypes = {
  translate: PropTypes.func.isRequired
}

TranslateRaw.propTypes = {
  children: PropTypes.func
}

function TranslateRaw (props, context) {
  return props.children(context.translate)
}
