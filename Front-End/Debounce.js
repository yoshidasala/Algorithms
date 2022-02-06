function debounce(func,delay,option = {trailing,leading}){
  let timerId;
  let lastArgs; D
  let {leading,trailing} = option

 function invoke(){
   func.apply(this,lastArgs)
   lastArgs = undefined
 }

  function debouced (){
  lastArgs = arguments
    if (!timerId && leading){
     invoke()
    }
  clearTimeout(timerId)
  timerId = setTimeout(()=>{
    timerId = undefined

    if(lastArgs && trailing){
       invoke()
      }
    },delay)
  }
  return debounced
}


console.log(debounce)
