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


//leading and trailing
function throttle(func, wait, option = { leading: true, trailing: true }) {

let lastArgs;
let timerId;
let {leading,trailing} = option

function invoke(){
  func.apply(this,lastArgs)
  lastArgs = undefined
}

function coolDown() {
  timerId = setTimeout(()=>{
    timerId = undefined
    if(lastArgs && trailing){
      invoke()
      coolDown()
    }
  },wait)
}

function throttled(){
  lastArgs = arguments

  if (!timerId ){
    if(leading){
      invoke()
    }

    coolDown()
  }

}

return throttled

}
