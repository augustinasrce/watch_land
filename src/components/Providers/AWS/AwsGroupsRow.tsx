import { Link } from "react-router-dom";

/** Utils */
import { IAwsLogGroups } from "../../../services/aws/spec";
import { timestampToDate } from "../../../utils/dates";

interface IAwsGroupRow {
  group?: IAwsLogGroups;
}

const AwsGroupsRow = ({ group }: IAwsGroupRow) => {
  return (
    <>
      {group ? (
        <tr>
          <td>
            <Link to={{ pathname: `/aws/streams/?group=${group.logGroupName}` }}>
              {group.logGroupName}
            </Link>
          </td>
          <td> {timestampToDate(group.creationTime)}</td>
        </tr>
      ) : null}
    </>
  );
};
export default AwsGroupsRow;
