// TDD - write a failing test first
// We are using ESM - ecma script modules

import { expect, it } from "vitest";
import { search } from "../search.js";

// happy path - how it should be called
it("should return the index of the element", () => {
  // Arrange
  const nums = [82, 22, -4, 21, 1, 8];
  const target = 8;
  const expected = 5;

  // Act
  const actual = search(nums, target);

  // Assert
  expect(actual).toBe(expected);
});

// Sad Path
it("should return -1 if the number is not in the array", () => {
  // Arrange
  const nums = [82, 22, -4, 21, 1, 8];
  const target = 7;
  const expected = -1;

  // Act
  const actual = search(nums, target);

  // Assert
  expect(actual).toBe(expected);
});
