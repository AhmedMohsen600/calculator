import { describe, expect, test } from "@jest/globals";
import { stringLength, reverseString } from "./app";

describe("string count", () => {
  test("string char count to euqal 5", () => {
    expect(stringLength("ahmed")).toBe(5);
  });
});

describe("reverse string", () => {
  test("reverse string demha to equal ahmed", () => {
    expect(reverseString("demha")).toBe("ahmed");
  });
});
