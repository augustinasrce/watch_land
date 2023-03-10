import { getNumberOfPages, sliceArray } from "utils/arrays";

test("test slice function on array", () => {
  const array = [0, 1, 2, 3];
  expect(sliceArray(array, 2)).toEqual([]);
  expect(sliceArray(array, 1)).toEqual(array);
});

test("test page number value", () => {
  const array = [...Array(52).keys()].map(function (_, i) {
    return i;
  });
  expect(getNumberOfPages([1, 2, 3, 4])).toBe(1);
  expect(getNumberOfPages(array)).toBe(2);
});
