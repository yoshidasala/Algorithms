function throttle(func, wait) {
  let timeoutID;
  let lastThis;
  let lastArgs;

  function invoke() {
    func.apply(lastThis, lastArgs);
    lastThis = lastArgs = undefined;
  }

  function coolDown() {
    timeoutID = setTimeout(() => {
      timeoutID = undefined;

      if (lastArgs) {
        invoke();
        coolDown();
      }
    }, wait);
  }

  function throttled() {
    lastThis = this;
    lastArgs = arguments;

    if (!timeoutID) {
      invoke();
      coolDown();
    }
  }

  return throttled;
}


