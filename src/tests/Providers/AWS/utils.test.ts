import { generateAwsGroupsTable } from "../../../components/Providers/AWS/utils";

test("test if group recieved from client data", () => {
  const group = {
    logGroupName: "/aws/lambda/dot",
    creationTime: 165334165114,
    metricFilterCount: 0,
    arn: "arn:aws:logs:eu-west-1:123456:log-group:/test"
  };
  const dataArray = [group];
  const baseUrl = "/aws/groups";

  const table = generateAwsGroupsTable(dataArray, baseUrl);
  expect(typeof table).toBe("object");
  expect(table).toHaveLength(1);
});
