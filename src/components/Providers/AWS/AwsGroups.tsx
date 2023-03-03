import { useState } from "react";

/** Cloud Services */
import { CloudWatch } from "../../../services/aws/aws";
import { IAwsLogGroups } from "../../../services/aws/spec";

/** Components  */
import BackButton from "../../Buttons/BackButton";
// import SearchBar from "../../SearchBar/SearchBar";
import Pagination from "../../Pagination/Pagination";
import Spinner from "../../Spinner/Spinner";
import AlertError from "../../Alert/AlertError";
import Table from "../../Table/Table";
import AwsGroupsRow from "../../Table/AwsTableRows/AwsGroupsRow";

/** Utils */
import { arrays } from "../../../utils/";
import { useCloudWatch, useQuery } from "../../../utils/hooks";

const AwsGroups = () => {
  const page = Number(useQuery().get("page") || "1");
  const [filteredGroups, setFilteredGroups] = useState<IAwsLogGroups[]>([]);

  const { data: groups, loading, error } = useCloudWatch<IAwsLogGroups>(CloudWatch.groups());

  const filterByGroupName = (groupName: string) => {
    const result = groups.filter(group => group.logGroupName.includes(groupName));
    setFilteredGroups(result);
  };

  if (error) return <AlertError />;

  if (loading) return <Spinner />;

  return (
    <>
      <div className="d-flex justify-content-between pt-4 pb-4">
        <BackButton />
        {/* <SearchBar placeHolder="Search" search={filterByGroupName} isFinishDate={false} /> */}
      </div>
      <Table
        headers={["Log group", "Creation time"]}
        itemComponent={AwsGroupsRow}
        items={groups}
        resourceName="group"
      />
      <Pagination active={page} pageCount={arrays.getNumberOfPages(filteredGroups)} />
    </>
  );
};

export default AwsGroups;
