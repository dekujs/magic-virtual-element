/**
 * @jsx element
 */

var test = require('tape')
var element = require('../')

test('magic attributes', ({equal, end, ok}) => {
  var node

  node = element('div', {
    class: ['foo', false, 'bar', null, 'baz']
  })

  ok(node.attributes.class === 'foo bar baz')

  node = element('div', {
    class: {
      foo: true,
      bar: true,
      baz: false
    }
  })

  ok(node.attributes.class === 'foo bar')

  node = element('div', {
    style: {
      border: {
        width: 1
      }
    }
  })

  ok(node.attributes.style === 'border-width: 1px')
})

test.only('jsx compatiblity', ({equal, end}) => {
  var child1 = element('div')
  var child2 = element('div')
  var node = element('div', null, child1, child2)
  equal(node.children.length,2, 'children are spread')
  end()
})