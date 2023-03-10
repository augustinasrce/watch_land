import { useState } from "react";

/** Cloud Services */
import { CloudWatch } from "../../../services/aws/aws";
import { IAwsLogGroups } from "../../../services/aws/spec";

/** Components  */
import BackButton from "../../Buttons/BackButton";
import SearchBar from "../../SearchBar/SearchBar";
// import Pagination from "../../Pagination/Pagination";
import Spinner from "../../Spinner/Spinner";
import AlertError from "../../Alert/AlertError";
import Table from "../../table/Table";
import AwsGroupsRow from "../../table/AwsTableRows/AwsGroupsRow";

/** Utils */
// import { arrays } from "../../../utils/";
import { useCloudWatch } from "../../../utils/hooks";

const AwsGroups = () => {
  const [filterQuery, setFilterQuery] = useState<string>("");

  const { data: groups, loading, error } = useCloudWatch<IAwsLogGroups>(CloudWatch.groups());

  const filterByGroupName = (groupName: string) => {
    return groups.filter(group => group.logGroupName.includes(groupName));
  };

  if (error) return <AlertError />;

  if (loading) return <Spinner />;

  return (
    <>
      <div className="d-flex justify-content-between pt-4 pb-4">
        <BackButton />
        <SearchBar placeHolder="Search" setFilterQuery={setFilterQuery} />
      </div>
      <Table
        headers={["Log group", "Creation time"]}
        itemComponent={AwsGroupsRow}
        items={filterByGroupName(filterQuery)}
        resourceName="group"
      />
      {/* <Pagination active={page} pageCount={arrays.getNumberOfPages(filteredGroups)} /> fix it */}
    </>
  );
};

export default AwsGroups;
