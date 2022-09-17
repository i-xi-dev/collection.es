import { Integer } from "https://raw.githubusercontent.com/i-xi-dev/int.es/1.1.1/mod.ts";

type int = number;

class SizedMap<K, V> extends Map<K, V> {
  #maxSize: int;

  constructor(maxSize: int) {
    if (Integer.isPositiveInteger(maxSize) !== true) {
      throw new TypeError("maxSize");
    }
    super();
    this.#maxSize = maxSize;
  }

  set(key: K, value: V): this {
    if (this.size >= this.#maxSize) {
      this.delete([...this.keys()][0]);
    }
    super.set(key, value);
    return this;
  }
}
Object.freeze(SizedMap);

export { SizedMap };
