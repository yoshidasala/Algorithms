// Array: O(n)
class NodeStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(node, value) {
    const index = this.keys.indexOf(node);

    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(node);
      this.values.push(value);
    }
  }

  get(node) {
    const index = this.keys.indexOf(node);
    return index >= 0 ? this.values[index] : undefined;
  }

  has(node) {
    return !!this.get(node);
  }
}

// Array: O(1)
class NodeStore {
  constructor() {
    this.values = [];
  }

  set(node, value) {
    if (node.dataset.nodeStoreId) {
      this.values[node.dataset.nodeStoreId] = value;
    } else {
      node.dataset.nodeStoreId = this.values.length;
      this.values.push(value);
    }
  }

  get(node) {
    return this.values[node.dataset.nodeStoreId];
  }

  has(node) {
    return !!node.dataset.nodeStoreId;
  }
}
