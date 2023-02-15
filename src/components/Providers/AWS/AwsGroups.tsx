import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/** Redux */
import { RootState } from "../../../redux/store";
import { updateLoadingState } from "../../../redux/reducers/loading";

/** Cloud Services */
import { CloudWatch } from "../../../services/aws/aws";
import { IAwsLogGroups } from "../../../services/aws/spec";

/** Components  */
import BackButton from "../../Buttons/BackButton";
import SearchBar from "../../SearchBar/SearchBar";
import Pagination from "../../Pagination/Pagination";
import Spinner from "../../Spinner/Spinner";
import AlertEmpty from "../../Alert/AlertEmpty";
import AlertError from "../../Alert/AlertError";
import Table from "../../Table/Table";

/** Utils */
import { generateAwsTable } from "./utils";
import { ITableCell } from "../../../utils/spec";
import { arrays } from "../../../utils/";
import { useQuery } from "../../../utils/hooks";

const AwsGroups = () => {
  const dispatch = useDispatch();
  const page = Number(useQuery().get("page") || "1");
  const [groups, setGroups] = useState<IAwsLogGroups[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<IAwsLogGroups[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [empty, setEmpty] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const stateLoading = useSelector((state: RootState) => state.loading.loading);

  const setLoading = (loading: boolean) => {
    const payload = { loadingData: loading };
    const action = updateLoadingState(payload);
    dispatch(action);
  };

  const loadGroups = async () => {
    let dataGroups: IAwsLogGroups[] = [];
    setLoading(true);
    CloudWatch.groups()
      .observe(data => {
        dataGroups = dataGroups.concat(data);
        setGroups(dataGroups);
        setFilteredGroups(dataGroups);
        setLoading(false);
      })
      .done(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    if (filteredGroups.length === 0) setEmpty(true);
    else setEmpty(false);
  }, [stateLoading, filteredGroups]);

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    const groupCells = arrays.sliceArray(filteredGroups, page);
    const bodyCells = generateAwsTable(groupCells, "", "/aws/streams/");
    setBody(bodyCells);
  }, [filteredGroups, page]);

  const filterByGroupName = (groupName: string) => {
    const result = groups.filter(group => group.logGroupName.startsWith(groupName));
    setFilteredGroups(result);
  };

  return (
    <>
      {error ? <AlertError /> : null}
      {stateLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-between pt-4 pb-4">
            <BackButton />
            <SearchBar placeHolder="Search" search={filterByGroupName} isFinishDate={false} />
          </div>
          {empty ? (
            <AlertEmpty />
          ) : (
            [
              <Table headers={["Log group", "Creation time"]} body={body} openable={false} />,
              <Pagination active={page} pageCount={arrays.getNumberOfPages(filteredGroups)} />
            ]
          )}
        </>
      )}
    </>
  );
};

export default AwsGroups;
