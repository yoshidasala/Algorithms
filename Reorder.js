const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]

function sort(items, newOrder) {

  let result = []
  for (let i = 0; i < items.length; i++){
    let newIndex = newOrder[i]
    result[newIndex] = items[i]
  }
  return result
}

console.log(sort(A,B))
