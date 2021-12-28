//

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    let childNode =new Node(name);
    this.children.push(childNode);
    return childNode;
  }

  depthFirstSearch(array) {

   array.push(this.name)

    if(this.children.length > 1) {
      for (let i = 0; i < this.children.length; i++){
        this.children[i].depthFirstSearch(array)
      }
    }

    return array;
  }
}

// node {
//   this.name: "A"
//   this.children: [ n2:this.name = b,this.children[node3:this.name= e]]
//   }
// }

let A = new Node("A");
let B = A.addChild("B");
let C = A.addChild("C");
let D = A.addChild("D");

let G = D.addChild('G');
G.addChild('K');
D.addChild('H')

B.addChild("E");
let F = B.addChild("F");
F.addChild("I");
F.addChild("J");

// console.log(A.depthFirstSearch([]));
// // [A,B, E, F, I, J, C,D]
