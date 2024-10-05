import assert from "node:assert";
import { test } from "node:test";
import sum from "./index.js";

test("sum of two positive numbers", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("first argument is not a number", () => {
  assert.strictEqual(sum("a", 3), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum({}, 3), 0);
  assert.strictEqual(sum([], 3), 0);
});

test("second argument is not a number", () => {
  assert.strictEqual(sum(2, "b"), 0);
  assert.strictEqual(sum(2, null), 0);
  assert.strictEqual(sum(2, {}), 0);
  assert.strictEqual(sum(2, []), 0);
});

test("first argument is a negative number", () => {
  assert.strictEqual(sum(-1, 3), 0);
  assert.strictEqual(sum(-2, -2), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test("second argument is a negative number", () => {
  assert.strictEqual(sum(2, -3), 0);
  assert.strictEqual(sum(-2, -2), 0);
  assert.strictEqual(sum(-1, -1), 0);
});
