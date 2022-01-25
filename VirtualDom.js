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

  if (typeof json === "string") return document.createTextNode(json)

  const parent = document.createElement(json.type)
  const { children, ...attr } = json.props

  if (Array.isArray(children)) {
    children.forEach((child)=> parent.append(render(child)))
  } else {
    parent.append(children)
  }

  for (const [name, value] of attr) {
    const attr = name === "className" ? "class" : name
    parent.setAttribute(attr,value)
  }


  return parent

}

// to use it like dom = new DOM(); dom.virtualize(elem); dom.render(resultingVirt);

// so basically define a class just to instantiate objects that have the virtualize and render methods on it
// 2. An mixture of Virtual DOM-1 and Virtual DOM-3 which uses ES6 class implementation
// The question was, u have a class, which have render method. Implement V-Dom-1
// I finished early, so he added support for function components too

function createElement(type, props, ...children) {
  // your code here
const element = document.createElement(type);

// Add attributes
for(let key in props){
  const attr = key === "className" ? "class" : key
  element.setAttribute(attr,props[key]);
}

for(let child of children){
  if(typeof child === 'string'){
    element.append(document.createTextNode(child));
  }
  else{
    element.append(child);
  }
}
return element;
}


///virtual dom 2

function createElement(type, props, ...children) {
  if(typeof type === "function"){
    return type({children,...props})
  }
  const element = document.createElement(type);

 for(let key in props){
  const attr = key === "className" ? "class" : key
  element.setAttribute(attr,props[key]);
}

 for(let child of children){
  if(typeof child === 'string'){
    element.append(document.createTextNode(child));
  }
  else{
    element.append(child);
  }
}

  return element
}
