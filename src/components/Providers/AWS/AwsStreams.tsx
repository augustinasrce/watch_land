import { useEffect, useState } from "react";
import { IAwsStreams } from "../../../services/aws/spec";
import { useQuery } from "../../../utils/hooks";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";
import Spinner from "../../Spinner/Spinner";
import SearcBar from "../../SearchBar/searchBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { updateLoadingState } from "../../../redux/reducers/loading";
import { generateTable } from "../../../utils/table";
import Pagination from "../../Pagination/pagination";
import { getNumberOfPages, sliceArray } from "../../../utils/arrays";
import NoResult from "../../Alert/NoResult";

const AwsStreams = () => {
  const dispatch = useDispatch();
  const page = Number(useQuery().get("page") || "1");
  const groupName = useQuery().get("group") || "";
  const [streams, setStreams] = useState<IAwsStreams[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [empty, setEmpty] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const stateLoading = useSelector((state: RootState) => state.loading.loading);

  const setLoading = (loading: boolean) => {
    const payload = { loadingData: loading };
    const action = updateLoadingState(payload);
    dispatch(action);
  };

  const loadStreams = async (prefix?: string | undefined) => {
    let dataStreams: IAwsStreams[] = [];
    const groups = [groupName];
    setLoading(true);
    CloudWatch.streams(groups, prefix)
      .observe(data => {
        dataStreams = dataStreams.concat(data);
        setStreams(dataStreams);
        setLoading(false);
      })
      .done(() => {
        setLoading(false);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (streams.length === 0) setEmpty(true);
    else setEmpty(false);
  }, [stateLoading, streams]);

  useEffect(() => {
    loadStreams();
  }, []);

  useEffect(() => {
    const streamCells = sliceArray(streams, page);
    const bodyCells = generateTable(streamCells, groupName, "/aws/logs/");
    setBody(bodyCells);
  }, [streams, page]);

  return (
    <>
      {error ? <ErrorAlert /> : null}
      {stateLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-between pt-4 pb-4">
            <BackButton />
            <SearcBar placeHolder="Search prefix" search={loadStreams} isFinishDate={false} />
          </div>
          {empty ? (
            <NoResult />
          ) : (
            [
              <Table
                headers={["Log stream", "First event time", "Last event time"]}
                body={body}
                openable={false}
              />,
              <Pagination active={page} pageCount={getNumberOfPages(streams)} />
            ]
          )}
        </>
      )}
    </>
  );
};

export default AwsStreams;
