import { describe, expect, test } from "@jest/globals";
import Calculator from "./index";

describe("sum modal", () => {
  test("add 1 + 2 to equal 3", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
});

describe("subtract modal", () => {
  test("divide 4 - 1 to equal 1", () => {
    expect(Calculator.subtract(5, 4)).toBe(1);
  });
});

describe("divide modal", () => {
  test("add 12 / 3 to equal 4", () => {
    expect(Calculator.divide(12, 3)).toBe(4);
  });
});

describe("multiply modal", () => {
  test("multiply 2 * 3 to equal 6", () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });
});
