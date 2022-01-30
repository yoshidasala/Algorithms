
const arr = [1, [2], [3, [4]]];

function flat(arr, depth = 1) {
  const queue = arr.map(item => [item, depth])

  queue
  const finalResult = []

  while(queue.length) {
    const [item, itemDepth] = queue.shift()
    if(Array.isArray(item) && itemDepth > 0) {
      queue.push(...item.map(el => [el, itemDepth - 1]))
    } else {
      finalResult.push(item)
    }
  }
  return finalResult
}
console.log(flat(arr))
// [1, 2, 3, [4]]

// console.log(flat(arr, 1))
// // [1, 2, 3, [4]]

console.log(flat(arr, 2))
// // [1, 2, 3, 4]
