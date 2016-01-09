import { element } from 'deku'
import { string } from 'to-style'
import classNames from 'classnames'
import componentType from 'component-type'

export default function magic (type, attributes, children) {
  let vnode = element(type, attributes, children)

  if (componentType(vnode.attributes.class) === 'array') {
    vnode.attributes.class = classNames.apply(null, vnode.attributes.class)
  }

  if (componentType(vnode.attributes.class) === 'object') {
    vnode.attributes.class = classNames(vnode.attributes.class)
  }

  if (componentType(vnode.attributes.style) === 'object') {
    vnode.attributes.style = string(vnode.attributes.style)
  }

  if (!vnode.attributes.hidden) {
    delete vnode.attributes.hidden
  }

  return vnode
}
