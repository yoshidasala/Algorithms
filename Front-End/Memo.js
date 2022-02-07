// function memo(func, resolver) {
//   //   // your code here
//     const cache = new Map();

  //   // If my cache key is in my cache, use that value

  //   return function() {
  //     const cacheKey = resolver ?  resolver(...arguments) : Array.from(arguments).join(',');

  //     if (cache.has(cacheKey)) {
  //       console.log('cached');
  //       return cache.get(cacheKey);
  //     }
  //     // Otherwise invoke the function and add it to my cache
  //     const val = func.apply(this, arguments);
  //     cache.set(cacheKey, val);
  //     return val;
  //   }
  // }

  // With this context in mind, check test cases below.
  function memo(func, resolver) {
    // your code here
    const cache = new Map();

    // Map<cacheKey, Map<context, value>>
    return function(...args) {
      const cacheKey = resolver ?  resolver(...args) : args.join(',');
      const contextMap = cache.get(cacheKey);

      if (!contextMap) {
        const value = func.apply(this, arguments);
        cache.set(cacheKey, new Map([[ this, value ]]));
        return value;
      }

      if (contextMap.has(this)) {
        return contextMap.get(this);
      }
      const value = func.apply(this, arguments);
      contextMap.set(this, value);
      return value;
    }
  }


  const func = (arg1, arg2) => {
    return arg1 + arg2
  }

  const memoed = memo(func)

  console.log(memoed(1, 2))
  // 3, func is called

  console.log(memoed(1, 2))
  // 3 is returned right away without calling func

  console.log(memoed(1, 3))


  /*
  cache {
    1_2 :  Map memoed(1, 2) : 3
               : 9
  }

  use a cache limit since you are memoizing functions you can only store
  a limited amount beodre you run our of memory
  we could use a weakMap to avoid memory leak
  */

  /*We can use the concept of catching, how it works on devices.
  We can fix the number of key value pairs stored in our map. We will fill it up to the capacity.
  Once the capacity is full, we discard the oldest key - value and store the newest-- > like a queue.
  */


  function memo(func, resolver) {
    const store = new Map();  // Map<keys: any>
    const capacity = 10;
    const keyArr = [];

    return function (...args) {
      const key = (resolver !== undefined) ? resolver.apply(this, args) : args.join("_");

      if(!store.has(key)){
        if(store.size > capacity){
          const delKey = keyArr.shift();
          store.delete(delKey);
        }
        keyArr.push(key);
        const retVal = func.apply(this, args);
        store.set(key, retVal);
      }
      return store.get(key);
    }
  }
