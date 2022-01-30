class Observable {
  constructor(setup) {
    this.setup = setup;
  }

  subscribe(subscriber) {
    function unsubscribe() {
      subscribed = false;
    }

    let subscribed = true;
    const observer = {
      next(value) {
        if (!subscribed) {
          return;
        }

        if (typeof subscriber === 'function') {
          subscriber(value);
        } else {
          subscriber.next?.(value);
        }
      },
      error(error) {
        if (!subscribed) {
          return;
        }

        unsubscribe();
        subscriber.error?.(error);
      },
      complete() {
        if (!subscribed) {
          return;
        }

        unsubscribe();
        subscriber.complete?.();
      },
    };

    this.setup(observer);
    return {
      unsubscribe,
    };
  }
}
