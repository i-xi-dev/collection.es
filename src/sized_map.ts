import { SafeInteger } from "../deps.ts";

export class SizedMap<K, V> extends Map<K, V> {
  #maxSize: SafeInteger;

  constructor(maxSize: SafeInteger) {
    if (SafeInteger.isNonNegativeSafeInteger(maxSize) !== true) {
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
