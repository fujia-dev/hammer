export class EventBus {
  callbacks: Record<string, any[]> = {};

  on(type: string, cb: CallableFunction) {
    const curTypeEvent = this.callbacks[type];

    if (curTypeEvent) {
      this.callbacks[type].push(cb);
    } else {
      this.callbacks[type] = [cb];
    }
  }

  emit<T>(type: string, data: T) {
    const curTypeEvent = this.callbacks[type];

    if (curTypeEvent && curTypeEvent.length > 0) {
      curTypeEvent.forEach((cb) => {
        cb(data);
      });
    }
  }

  off(eventName: string) {
    if (eventName) {
      delete this.callbacks[eventName];
    } else {
      this.callbacks = {};
    }
  }
}
