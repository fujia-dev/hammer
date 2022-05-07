import { isUndef, isString } from './is';

type Callbacks = {
  [key: string]: Record<string, any>;
};

const TOKEN_PREFIX = 'token_';

export class PubSub {
  static id = 1;
  static callbacks: Callbacks = {};

  static subscribe(channel: string, cb: CallableFunction) {
    const token = TOKEN_PREFIX + this.id++;
    let curChannel = this.callbacks[channel];

    if (curChannel) {
      curChannel[token] = cb;
    } else {
      curChannel = {
        [token]: cb,
      };
    }
  }

  static publish<T>(channel: string, data: T) {
    const curChannel = this.callbacks[channel];

    if (curChannel) {
      Object.values(curChannel).forEach((cb) => {
        cb(data);
      });
    }
  }

  static unsubscribe(flag?: string) {
    if (isUndef(flag)) {
      this.callbacks = {};
    } else if (isString(flag)) {
      if (flag.includes(TOKEN_PREFIX)) {
        // eslint-disable-next-line no-prototype-builtins
        const cbObj = Object.values(this.callbacks).find((obj) => obj.hasOwnProperty(flag));

        if (cbObj) {
          delete cbObj[flag];
        }
      }
    } else {
      delete this.callbacks[flag];
    }
  }
}
