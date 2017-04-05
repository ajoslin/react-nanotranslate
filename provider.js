'use strict'

var React = require('react')
var nanotranslate = require('nanotranslate')

module.exports = Provider

Provider.prototype = Object.create(React.Component.prototype)

function Provider (props) {
  React.Component.call(this, props)
  this.onUpdate(props.dictionary)
}

Provider.childContextTypes = {
  translate: React.PropTypes.func.isRequired
}

Provider.propTypes = {
  dictionary: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    values: React.PropTypes.object.isRequired
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
