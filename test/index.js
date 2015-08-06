/** @jsx element */

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

test('jsx compatiblity', ({equal, end}) => {
  var node = (
    <div>
      <span/>
      <span/>
    </div>
  )
  equal(node.children.length,2, 'children are spread')
  end()
})