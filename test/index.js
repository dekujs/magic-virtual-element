/** @jsx h */
import test from 'tape'
import element from '../'

test('magic class attribute', ({equal, end}) => {
  let vnode = element('div', {
    class: [ 'foo', false, 'bar', null, 'baz' ]
  })

  equal(vnode.attributes.class, 'foo bar baz')

  vnode = element('div', {
    class: {
      foo: true,
      bar: true,
      baz: false
    }
  })

  equal(vnode.attributes.class, 'foo bar')

  end()
})

test('magic style attribute', ({equal, end}) => {
  let vnode = element('div', {
    style: {
      border: {
        width: 1
      }
    }
  })

  equal(vnode.attributes.style, 'border-width: 1px')

  end()
})

test('magic hidden attribute', ({equal, comment, end}) => {
  let vnode = element('div', {
    hidden: true
  })

  equal(vnode.attributes.hidden, true)

  vnode = element('div', {
    hidden: false
  })

  equal(vnode.attributes.hasOwnProperty('hidden'), false)

  vnode = element('div', {
    hidden: null
  })

  equal(vnode.attributes.hasOwnProperty('hidden'), false)

  vnode = element('div', {
    hidden: undefined
  })

  equal(vnode.attributes.hasOwnProperty('hidden'), false)

  end()
})
