import assert from "node:assert";
import { test } from "node:test";
import { sum } from "./index.js";

test("Sum function should return sum of two numbers", () => {
  assert.strictEqual(sum(3, 5), 8);
});

test("Sum function should return sum of two numbers", () => {
  assert.strictEqual(sum(7, 7), 14);
});

test("Sum function should return sum of two numbers", () => {
  assert.strictEqual(sum(3, 10), 13);
});

test("Sum function should return sum of two numbers", () => {
  assert.strictEqual(sum(7, 9), 16);
});

test("Sum function should return sum of two numbers", () => {
  assert.strictEqual(sum(3, 19), 22);
});
