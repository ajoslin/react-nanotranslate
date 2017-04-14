'use strict'

var React = require('react')
var PropTypes = require('prop-types')
var nanotranslate = require('nanotranslate')

module.exports = Provider

Provider.prototype = Object.create(React.Component.prototype)

function Provider (props) {
  React.Component.call(this, props)
  this.onUpdate(props.dictionary)
}

Provider.childContextTypes = {
  translate: PropTypes.func.isRequired
}

Provider.propTypes = {
  dictionary: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired
  })
}

Provider.prototype.getChildContext = function () {
  return {
    translate: this.translate
  }
}

Provider.prototype.componentWillReceiveProps = function (nextProps) {
  if (nextProps.dictionary === this.props.dictionary) return
  this.onUpdate(nextProps.dictionary)
}

Provider.prototype.onUpdate = function (dictionary) {
  this.translate = nanotranslate(dictionary)
}

Provider.prototype.render = function () {
  return React.Children.only(this.props.children)
}
