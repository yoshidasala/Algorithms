function memo(func, resolver) {
  const cache = new Map();

  return function (...args) {
    //if the resolver is undefined than we use teh resolve to create the key
    const cacheKey = resolver ? resolver(...args) : args.join("");

    let cachedKey = cache.get(cacheKey);

    if (!cachedKey) {
      //reusult of the args
      const result = func.call(this, ...args);
      cache.set(cacheKey, new Map([[this, result]]));
      result

      // cacheKey

      return result;
    }

    if (cachedKey.has(this)) {
      return cachedKey.get(this);
    }

    const result = func.call(this, ...args);
    cachedKey.set(this, result);

    return result;
  };
}


const func = (arg1, arg2) => {
  return arg1 + arg2
}

const memoed = memo(func)

console.log(memoed(1, 2))
// 3, func is called

console.log(memoed(1, 2,function (c) {
  return `${this.a}_${this.b}_${c}`;
}))
// // 3 is returned right away without calling func

console.log(memoed(1, 3))
// 4, new arguments, so func is called
