import { generateAwsTable } from "../../../components/Providers/AWS/utils";

test("test if group recieved from client data", () => {
  const group = {
    logGroupName: "/aws/lambda/dot",
    creationTime: "165334165114",
    metricFilterCount: 0,
    arn: "arn:aws:logs:eu-west-1:975023283612:log-group:/aws/lambda/test:*"
  };
  const dataArray = [group];
  const groupName = "aws";
  const baseUrl = "/aws/groups";

  const table = generateAwsTable(dataArray, groupName, baseUrl);
  expect(typeof table).toBe("object");
  expect(table).toHaveLength(1);
});
