import { SafeIntegerType } from "../deps.ts";

type int = number;

export class SizedMap<K, V> extends Map<K, V> {
  #maxSize: int;

  constructor(maxSize: int) {
    if (SafeIntegerType.isNonNegative(maxSize) !== true) {
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
