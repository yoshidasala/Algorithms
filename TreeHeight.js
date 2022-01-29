// BFS
function getHeight(tree) {
  if (!tree) {
    return 0;
  }

  let res = 0;
  const queue = [tree];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      queue.push(...node.children);
    }

    res++;
  }

  return res;
}
