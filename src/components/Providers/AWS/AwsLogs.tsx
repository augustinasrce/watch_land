import { useState } from "react";

/** Cloud Services */
import { CloudWatch } from "../../../services/aws/aws";
import { IAwsLogs } from "../../../services/aws/spec";

/** Components  */
import SearchBar from "../../SearchBar/SearchBar";
// import Pagination from "../../Pagination/Pagination";
import Spinner from "../../Spinner/Spinner";
import AlertError from "../../Alert/AlertError";
import BackButton from "../../Buttons/BackButton";
import Table from "../../Table/Table";
import AwsLogsRow from "../../Table/AwsTableRows/AwsLogsRow";

/** Utils */
// import { getNumberOfPages } from "../../../utils/dates";
import { useCloudWatch, useQuery } from "../../../utils/hooks";

const AwsLogs = () => {
  const groupName = useQuery().get("group") || "";
  const page = Number(useQuery().get("page") || "1");

  const [filterQuery, setFilterQuery] = useState<string>("");
  const {
    data: logs,
    loading,
    error
  } = useCloudWatch<IAwsLogs>(CloudWatch.logs([{ group: groupName }]));

  const filterByStreamName = (streamName: string) => {
    return logs.filter(log => log.logStreamName.includes(streamName));
  };

  if (error) return <AlertError />;

  if (loading) return <Spinner />;

  return (
    <>
      <div className="d-flex justify-content-between pt-4 pb-4">
        <BackButton />
        <SearchBar placeHolder="Search pattern" setFilterQuery={setFilterQuery} />
      </div>
      <Table
        headers={["Log stream name", "Message", "Timestamp"]}
        itemComponent={AwsLogsRow}
        items={filterByStreamName(filterQuery)}
        resourceName="log"
      />
      {/* <Pagination active={page} pageCount={getNumberOfPages(logs)} /> fix it */}
    </>
  );
};

export default AwsLogs;
