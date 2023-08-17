import { Integer } from "../deps.ts";

class SizedMap<K, V> extends Map<K, V> {
  #maxSize: Integer;

  constructor(maxSize: Integer) {
    if (Integer.isPositiveInteger(maxSize) !== true) {
      throw new TypeError("maxSize");
    }
    super();
    this.#maxSize = maxSize;
  }

  override set(key: K, value: V): this {
    if (this.size >= this.#maxSize) {
      this.delete([...this.keys()][0]);
    }
    super.set(key, value);
    return this;
  }
}
Object.freeze(SizedMap);

export { SizedMap };
