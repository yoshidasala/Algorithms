const originSetTimeout = setTimeout;
const originClearTimeout = clearTimeout;
const timers = new Set();

window.clearAllTimeout = () => {
  for (const timerId of timers) {
    clearTimeout(timerId);
  }
};

window.setTimeout = (callback, time, ...args) => {
  const callbackWrapper = () => {
    callback(...args);
    timers.delete(timerId);
  };
  const timerId = originSetTimeout(callbackWrapper, time);
  timers.add(timerId);
  return timerId;
};

window.clearTimeout = (id) => {
  originClearTimeout(id);
  timers.delete(id);
};
