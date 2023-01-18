import { tableCellObject } from "../../utils/objects";

test("test tableCellObject returns an object with 3 keys", () => {
  const message = "test string";
  const isLink = false;
  const link = "https://google.com";

  const cell = tableCellObject(message, isLink, link);
  expect(typeof cell).toBe("object");

  const cellKeys = Object.keys(cell);
  expect(cellKeys).toHaveLength(3);
  expect(cellKeys[0]).toBe("message");
  expect(cellKeys[1]).toBe("isLink");
  expect(cellKeys[2]).toBe("link");
});
