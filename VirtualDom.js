function virtualize(element) {
  // virtualize top level element
  // recursively handle the children (childNodes)
  const result = {
    type: element.tagName.toLowerCase(),
    props: {}
  }
  // props (without children)
  for (let attr of element.attributes) {
    const name = attr.name === 'class' ? 'className' : attr.name
    result.props[name] = attr.value
  }
  // children
  const children = []
  for (let node of element.childNodes) {
    if (node.nodeType === 3) { // text node
      children.push(node.textContent)
    } else {
      children.push(virtualize(node))
    }
  }

  result.props.children = children.length === 1 ? children[0] : children

  return result
}

console.log(virtualize(element))


function render(json) {

  

}
