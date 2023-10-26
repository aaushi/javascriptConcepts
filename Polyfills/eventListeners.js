class EventTarget {
  constructor() {
    this.listener = {};
  }

  addEventListener(name, callback) {
    if (!this.listener.hasOwnProperty(name)) {
      this.listener[name] = new Set([callback]);
    } else {
      this.listener[name].add(callback);
    }

    //callback();
    //console.log(this.listener)
  }

  removeEventListener(name, callback) {
    this.listener[name]?.delete(callback);
  }

  dispatchEvent(name) {
    this.listener[name]?.forEach((cb) => cb());
  }
}

let ev = new EventTarget();
ev.addEventListener("test", () => console.log("hit!"));
ev.dispatchEvent("test");
