class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(name) {
    let newNode = new Node(name);
    this.children.push(newNode);
    return this;
  }

  // BFS function (empty array => array with node names in BFS order)

  breathFirstSearch(arr) {
    // initialize my queue
    let queue = [];

    while (queue.length > 0) {
      let node = queue.shift();
      node.children.forEach((childNode) => queue.push(childNode));
      arr.push(node.name);
    }
    // while queue is not empty
    // shift the first child in my queue
    // add children to my queue
    return arr;
  }
}
const graph = new Node("A");
graph.addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");

graph;
