import { timestampToDate } from "../../components/timestampToDate";

test("test timestampToDate dateObject type", () => {
  const dateObject = timestampToDate("Wed 2022/05/04");
  expect(dateObject).toBe("Wed, 5/4/2022");
});
