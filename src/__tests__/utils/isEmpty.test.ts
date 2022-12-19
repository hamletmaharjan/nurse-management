import { isEmpty } from "../../utils/isEmpty";

describe("isEmpty", function () {
  test("should return `true` for empty values", () => {
    //Assert
    expect(isEmpty("")).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  test("should return `false` for non-empty values", () => {
    //Assert
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty("abc")).toBe(false);
    expect(isEmpty({ a: "abc" })).toBe(false);
  });
});