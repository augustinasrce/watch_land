import { useState, useEffect } from "react";
import { ITableCell } from "../../../utils/spec";
import { IAwsLogs } from "../../../services/aws/spec";
import { useQuery } from "../../../utils/hooks";
import Table from "../../Table/Table";
import BackButton from "../../Buttons/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";
import Spinner from "../../Spinner/Spinner";
import SearcBar from "../../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { updateLoadingState } from "../../../redux/reducers/loading";
import { generateTable } from "../../../utils/table";
import { getNumberOfPages, sliceArray } from "../../../utils/arrays";
import Pagination from "../../Pagination/Pagination";
import NoResultAlert from "../../Alert/NoResultAlert";

const AwsLogs = () => {
  const dispatch = useDispatch();
  const groupName = useQuery().get("group") || "";
  const page = Number(useQuery().get("page") || "1");
  const [logs, setLogs] = useState<IAwsLogs[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [empty, setEmpty] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const stateLoading = useSelector((state: RootState) => state.loading.loading);
  const startDate = useSelector((state: RootState) => state.date.startDate);
  const endDate = useSelector((state: RootState) => state.date.endDate);

  const setLoading = (loading: boolean) => {
    const payload = { loadingData: loading };
    const action = updateLoadingState(payload);
    dispatch(action);
  };

  const loadLogs = async (searchPattern: string | undefined = undefined) => {
    let dataLogs: IAwsLogs[] = [];
    const logGroups = [{ group: groupName }];
    setLoading(true);
    CloudWatch.logs(logGroups, { start: startDate, end: endDate, pattern: searchPattern })
      .observe(data => {
        dataLogs = dataLogs.concat(data);
        setLogs(dataLogs);
        setLoading(false);
      })
      .done(() => {
        if (dataLogs.length === 0) setLogs(dataLogs);
        setLoading(false);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (logs.length === 0) setEmpty(true);
    else setEmpty(false);
  }, [stateLoading, logs]);

  useEffect(() => {
    loadLogs();
  }, []);

  useEffect(() => {
    const url = `/aws/logs`;
    const logCells = sliceArray(logs, page);
    const bodyCells = generateTable(logCells, groupName, url);
    setBody(bodyCells);
  }, [logs, page]);

  return (
    <>
      {error ? <ErrorAlert /> : null}
      {stateLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-between pt-4 pb-4">
            <BackButton />
            <SearcBar placeHolder="Search pattern" search={loadLogs} isFinishDate />
          </div>
          {empty ? (
            <NoResultAlert />
          ) : (
            [
              <Table headers={["Log stream name", "Message", "Timestamp"]} body={body} openable />,
              <Pagination active={page} pageCount={getNumberOfPages(logs)} />
            ]
          )}
        </>
      )}
    </>
  );
};

export default AwsLogs;
