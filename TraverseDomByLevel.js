
/*
DOM traversal by level

*/

const flatten(tree){

  if(!root) return []
  const result = new Set()
  const queue = [root]


  while (queue.length > 0) {
    let curr = queue.shift()
    result.add(curr)
    queue.push(...curr.children)
  }

  return [...result]

}

//     3
//   4    4
// 4  5

// result = [3,4,44 ]

// queue = [ ,5]

// console.log(flatten())
