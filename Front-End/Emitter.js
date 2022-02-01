//Map eventName : Set[]


class Emitter{
  constructor() {
    this.events = new Map()
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)){
      this.events.set(eventName,new Set())
    }
    const callbackObj = {callback}
    this.events.get(eventName).add(callbackObj)

    return {
      release: () => {
        this.events.get(eventName).delete(callbackObj)
      }
    }
  }


  emit(eventName, ...args) {
    if (this.events.has(eventName)) {
      this.events.get(eventName).forEach((callbackObj) => {
        callbackObj.callback.apply(this,args)
      })
     }
  }
}

const callback1=(msg) => {
console.log(msg)
}
const callback2=(msg) => {
  console.log(msg,"callback2")
  }

const emitter = new Emitter()

const sub1 = emitter.subscribe("event1", callback1)
const sub2 = emitter.subscribe("event2", callback2)
const sub3 = emitter.subscribe("event1", callback1)

// sub1.release()
// sub2.release()


emitter.emit('event1', 1, 2);

emitter

console.log(emitter.events)
