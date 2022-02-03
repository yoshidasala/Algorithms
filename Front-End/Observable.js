class Observable {

  constructor(setup) {
    this.setup = setup
  }

 subscribe(subscriber) {  //  this is observer two
    // a wrapper function/ object
    // is used to share the closure of outer function and modify the logics
    const subscriberWrapper = {
      unsubscribed: false,//true
      next(value) {
        if (this.unsubscribed) return
        // we are relying on the scope of subscriber
        if (typeof subscriber === "function") return subscriber(value);
        //if if a function than we can call subscriber(value ) insetad of subscriber.next(value)
        // return subscriber.next(value)
        return subscriber.next ? subscriber.next(value) : null //checking for the property because we need to check if the methods exisst on the called obj
      },
      error(value) {
        if (this.unsubscribed) return
        this.unsubscribe();

        return subscriber.error ? subscriber.error(value) : null;
      },
      complete() {
        if (this.unsubscribed) return;
        this.unsubscribe();
        return subscriber.complete ? subscriber.complete() : null
      },
      unsubscribe() {
        this.unsubscribed = true;
      }
    }
    this.setup(subscriberWrapper);
    return subscriberWrapper
  }
}

const setup = (observer)=> {
  observer.next(1)
  observer.next(2)
  setTimeout(() => {
    observer.error(3)
    observer.next(4)
    observer.complete()
  }, 100)
}

const observable = new Observable(setup) // the specific set up is stuck to this observable


const observer = {
  next: (value) => {
     console.log('we got a value', value)
  },
  error: (error) => {
    console.log('we got an error', error)
  },
  complete: () => {
    console.log('ok, no more values')
  }
}

const observer2 = (value)=> console.log(value)


const sub = observable.subscribe(observer2)

const sub2 = observable.subscribe({})



// console.log(sub)
