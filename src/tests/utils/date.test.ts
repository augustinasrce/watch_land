import { dates } from "../../utils/";

test("test timestampToDate dateObject type", () => {
  const dateObject = dates.timestampToDate("Wed 2022/05/04");
  expect(dateObject).toBe("Wed, 5/4/2022");
});

test("test 02/08/1990 at 22:11 timestamp returns correct format", () => {
  const timeStamp = 649631481000;
  const output = dates.dateToDateTimeStr(timeStamp);
  const expectedOutput = "1990-08-02T22:11";
  expect(output).toBe(expectedOutput);
});
test("test 06/11/1993 at 22:11 timestamp returns correct format", () => {
  const timeStamp = 752623860000;
  const output = dates.dateToDateTimeStr(timeStamp);
  const expectedOutput = "1993-11-06T22:11";
  expect(output).toBe(expectedOutput);
});
test("test 03/07/1994 at 04:00 timestamp returns correct format", () => {
  const timeStamp = 773204400000;
  const output = dates.dateToDateTimeStr(timeStamp);
  const expectedOutput = "1994-07-03T04:00";
  expect(output).toBe(expectedOutput);
});
test("test 20/03/2020 at 15:00 timestamp returns correct format", () => {
  const timeStamp = 1584716400000;
  const output = dates.dateToDateTimeStr(timeStamp);
  const expectedOutput = "2020-03-20T15:00";
  expect(output).toBe(expectedOutput);
});
test("test deducting 1 year from now", () => {
  const yearTimestramp = dates.getFullYear(1);
  const year = new Date(yearTimestramp).getFullYear();
  expect(year).toBe(2022);
});
test("test deducting 5 year from now", () => {
  const yearTimestramp = dates.getFullYear(5);
  const year = new Date(yearTimestramp).getFullYear();
  expect(year).toBe(2018);
});
