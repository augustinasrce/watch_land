/** Cloud Services */
import { CloudWatch } from "../../../services/aws/aws";
import { IAwsLogs } from "../../../services/aws/spec";

/** Components  */
// import SearchBar from "../../SearchBar/SearchBar";
import Pagination from "../../Pagination/Pagination";
import Spinner from "../../Spinner/Spinner";
import AlertError from "../../Alert/AlertError";
import BackButton from "../../Buttons/BackButton";
import Table from "../../Table/Table";
import AwsLogsRow from "../../Table/AwsTableRows/AwsLogsRow";

/** Utils */
import { arrays, useCloudWatch, useQuery } from "../../../utils/";

const AwsLogs = () => {
  const groupName = useQuery().get("group") || "";
  const page = Number(useQuery().get("page") || "1");

  const {
    data: logs,
    loading,
    error
  } = useCloudWatch<IAwsLogs>(CloudWatch.logs([{ group: groupName }]));

  if (error) return <AlertError />;

  if (loading) return <Spinner />;

  return (
    <>
      <div className="d-flex justify-content-between pt-4 pb-4">
        <BackButton />
        {/* <SearchBar placeHolder="Search pattern" search={loadLogs} isFinishDate /> fix it */}
      </div>
      <Table
        headers={["Log stream name", "Message", "Timestamp"]}
        itemComponent={AwsLogsRow}
        items={logs}
        resourceName="log"
      />
      <Pagination active={page} pageCount={arrays.getNumberOfPages(logs)} />
    </>
  );
};

export default AwsLogs;
