class Observable {

  constructor(setup) {
    this.setup = setup
  }

 subscribe(subscriber) {  // equivalent to fire
    // a wrapper function/ object
    // is used to share the closure of outer function and modify the logics
    const subscriberWrapper = {
      unsubscribed: false,
      next(value) {
        if (this.unsubscribed) return
        // we are relying on the scope of subscriber
        if (typeof subscriber === "function") return subscriber(value);
        return subscriber.next ? subscriber.next(value) : null
      },
      error(value) {
        if (this.unsubscribed) return
        this.unsubscribe();
        console.log(subscriber.error(value))
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

const observable = new Observable(setup)



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

const sub = observable.subscribe(observer)


// console.log(sub)
