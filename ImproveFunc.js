// Given an input of array,
// which is made of items with >= 3 properties

let items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
]

// an exclude array made of key value pair
const excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv' },
  {k: 'age', v:'20'},
  {k: 'color', v:'red'}
]

function excludeItems(items, excludes) {
  excludes.forEach(pair => { //  {k: 'color', v: 'silver'},

    items = items.filter(item => { console.log(item[pair.k]) } )
  })

  return items
}
//pair ={k: 'color', v: 'silver'},
//item = {color: 'red', type: 'tv', age: 18},
// "red" !== "silver"
// item[pair.k] == pair.v





///Map color: SET [siler,red,]

// const excludeItems = (items, excludes) => {

//   const map = new Map()

//   for (let { k, v } of excludes) {
//     if (!map.has(k)) {
//       map.set(k,new Set())
//     }
//     map.get(k).add(v)
//   }


//   return items.filter(item =>

//     Object.keys(item) )
//   )
// }


console.log(excludeItems(items,excludes))


//{color: 'red', type: 'tv', age: 18},
//
