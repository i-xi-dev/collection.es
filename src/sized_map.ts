import { SafeInteger } from "../deps.ts";

class SizedMap<K, V> extends Map<K, V> {
  #maxSize: SafeInteger;

  constructor(maxSize: SafeInteger) {
    if (SafeInteger.isNonNegative(maxSize) !== true) {
      throw new TypeError("maxSize");
    }
    super();
    this.#maxSize = maxSize;
  }

  override set(key: K, value: V): this {
    super.set(key, value);
    if (this.size > this.#maxSize) {
      this.delete([...this.keys()][0]);
    }
    return this;
  }
}
Object.freeze(SizedMap);

export { SizedMap };
