/** @jsx element */

var test = require('tape')
var element = require('../')

test('magic attributes', ({equal, end}) => {
  var node

  node = element('div', {
    class: ['foo', false, 'bar', null, 'baz']
  })

  equal(node.attributes.class, 'foo bar baz')

  node = element('div', {
    class: {
      foo: true,
      bar: true,
      baz: false
    }
  })

  equal(node.attributes.class, 'foo bar')

  node = element('div', {
    style: {
      border: {
        width: 1
      }
    }
  })

  equal(node.attributes.style, 'border-width: 1px')

  end()
})

test('jsx compatiblity', ({equal, end}) => {
  var node

  node = (
    <div>
      <span/>
      <span/>
    </div>
  )
  equal(node.children.length,2, 'children are spread')

  node = (
    <div />
  )
  equal(node.children.length,0, 'should not have children')

  node = (
    <div></div>
  )
  equal(node.children.length,0, 'should not have children')

  end()
})
