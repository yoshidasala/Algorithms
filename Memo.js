function memo(func, resolver) {
  const cache = new Map();

  function memoizedFunc() {
    const key = resolver
      ? resolver.apply(this, arguments)
      : Array.prototype.join.call(arguments, '_');

    if (!cache.has(key)) {
      const res = func.apply(this, arguments);
      cache.set(key, res);
    }

    return cache.get(key);
  }

  return memoizedFunc;
}

const func = (arg1, arg2) => {
  return arg1 + arg2
}

const memoed = memo(func)

// console.log(memoed(1, 2))
// // 3, func is called

// console.log(memoed(1, 2))
// // 3 is returned right away without calling func

console.log(memoed(1, 3))
// 4, new arguments, so func is called
