import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { SizedMap } from "../mod.ts";

Deno.test("new SizedMap()", () => {
  assertThrows(
    () => {
      new SizedMap(undefined as unknown as number);
    },
    TypeError,
    "maxSize",
  );
});

Deno.test("new SizedMap(*)", () => {
  assertThrows(
    () => {
      new SizedMap("2" as unknown as number);
    },
    TypeError,
    "maxSize",
  );
});

Deno.test("new SizedMap(number)", () => {
  assertThrows(
    () => {
      new SizedMap(0);
    },
    TypeError,
    "maxSize",
  );

  assertThrows(
    () => {
      new SizedMap(-1);
    },
    TypeError,
    "maxSize",
  );

  assertThrows(
    () => {
      new SizedMap(1.5);
    },
    TypeError,
    "maxSize",
  );

  const m0 = new SizedMap(1);
  assertStrictEquals(m0 instanceof Map, true);
});

Deno.test("SizedMap.set(*, *) - 1", () => {
  const m0 = new SizedMap<string, string>(1);
  assertStrictEquals(m0.size, 0);
  m0.set("1", "a");
  assertStrictEquals(m0.size, 1);
  m0.set("2", "b");
  assertStrictEquals(m0.size, 1);
  assertStrictEquals(m0.has("1"), false);
  assertStrictEquals(m0.has("2"), true);
});

Deno.test("SizedMap.set(*, *) - 2", () => {
  const m0 = new SizedMap<string, string>(2);
  assertStrictEquals(m0.size, 0);
  m0.set("1", "a");
  assertStrictEquals(m0.size, 1);
  m0.set("2", "b");
  assertStrictEquals(m0.size, 2);
  assertStrictEquals(m0.has("1"), true);
  assertStrictEquals(m0.has("2"), true);
  m0.set("3", "c");
  assertStrictEquals(m0.size, 2);
  assertStrictEquals(m0.has("1"), false);
  assertStrictEquals(m0.has("2"), true);
  assertStrictEquals(m0.has("3"), true);
});
