import { getNumberOfPages, sliceArray } from "../../utils/arrays";

test("test slice function on array", () => {
  const array = [0, 1, 2, 3];
  const startIndex = 1;
  const endIndex = 3;
  const slice = array.slice(startIndex, endIndex);
  expect(slice).toEqual([1, 2]);
});

test("test page number value", () => {
  const arrayLenght = [0, 1, 2, 3];
  const output = getNumberOfPages(arrayLenght);
  const expectedOutput = 1;
  expect(output).toBe(expectedOutput);
});
