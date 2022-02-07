// Array: O(n)
// class NodeStore {
//   constructor() {
//     this.keys = [];
//     this.values = [];
//   }

//   set(node, value) {
//     const index = this.keys.indexOf(node);

//     if (index >= 0) {
//       this.values[index] = value;
//     } else {
//       this.keys.push(node);
//       this.values.push(value);
//     }
//   }

//   get(node) {
//     const index = this.keys.indexOf(node);
//     return index >= 0 ? this.values[index] : undefined;
//   }

//   has(node) {
//     return !!this.get(node);
//   }
// }

// Array: O(1)
// class NodeStore {
//   constructor() {
//     this.values = [];
//   }

//   set(node, value) {
//     if (node.dataset.nodeStoreId) {
//       this.values[node.dataset.nodeStoreId] = value;
//     } else {
//       node.dataset.nodeStoreId = this.values.length;
//       this.values.push(value);
//     }
//   }

//   get(node) {
//     return this.values[node.dataset.nodeStoreId];
//   }

//   has(node) {
//     return !!node.dataset.nodeStoreId;
//   }
// }


//(o)1
class NodeStore {
  constructor() {
    this.map = {};
    this.key = Symbol();
  }

  set(node, value) {
    node[this.key] = Symbol();
    this.map[node[this.key]] = value;
  }

  get(node) {
    return this.map[node[this.key]];
  }

  has(node) {
    return node[this.key] in this.map;
  }
}

const store = new NodeStore()

store.set("hello",3)


//this.key = 0_0_0
/* {
d1_d1_d1 = 3
d2_d2_d2 = 6

*/

/*
 d1: <div></div>
 0_0_0 = d1_d1_d1
 d2: <div></div>
 0_0_0 = d2_d2_d2

nodestore.set(d1,3)


*/
