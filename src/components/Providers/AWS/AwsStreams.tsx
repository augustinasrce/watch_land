import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/** Redux */
import { RootState } from "../../../redux/store";
import { updateLoadingState } from "../../../redux/reducers/loading";

/** Cloud Services */
import { CloudWatch } from "../../../services/aws/aws";
import { IAwsStreams } from "../../../services/aws/spec";

/** Components  */
import BackButton from "../../Buttons/BackButton";
import SearchBar from "../../SearchBar/SearchBar";
import Pagination from "../../Pagination/Pagination";
import AlertEmpty from "../../Alert/AlertEmpty";
import AlertError from "../../Alert/AlertError";
import Spinner from "../../Spinner/Spinner";
import Table from "../../Table/DefaultTable";
import AwsStreamsRow from "./AwsStreamsRow";

/** Utils */
import { generateAwsStreamsTable } from "./utils";
import { useQuery } from "../../../utils/hooks";
import { ITableCell } from "../../../utils/spec";
import { arrays } from "../../../utils/";

const AwsStreams = () => {
  const dispatch = useDispatch();
  const page = Number(useQuery().get("page") || "1");
  const groupName = useQuery().get("group") || "";
  const [streams, setStreams] = useState<IAwsStreams[]>([]);
  const [filteredStreams, setFilteredStreams] = useState<IAwsStreams[]>([]);
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
        data.map((stream: { [x: string]: string }) => (stream["groupName"] = groupName));
        dataStreams = dataStreams.concat(data);
        setStreams(dataStreams);
        setFilteredStreams(dataStreams);
        setLoading(false);
      })
      .done(() => {
        setLoading(false);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (filteredStreams.length === 0) setEmpty(true);
    else setEmpty(false);
  }, [stateLoading, filteredStreams]);

  useEffect(() => {
    loadStreams();
  }, []);

  useEffect(() => {
    const streamCells = arrays.sliceArray(filteredStreams, page);
    const bodyCells = generateAwsStreamsTable(streamCells, groupName, "/aws/logs/");
    setBody(bodyCells);
  }, [filteredStreams, page]);

  const filterByStreamName = (streamName: string) => {
    const result = streams.filter(stream => stream.logStreamName.includes(streamName));
    setFilteredStreams(result);
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
            <SearchBar placeHolder="Search" search={filterByStreamName} isFinishDate={false} />
          </div>
          {empty ? (
            <AlertEmpty />
          ) : (
            [
              <Table
                headers={["Log stream", "First event time", "Last event time"]}
                itemComponent={AwsStreamsRow}
                items={streams}
                resourceName="stream"
              />,
              <Pagination active={page} pageCount={arrays.getNumberOfPages(filteredStreams)} />
            ]
          )}
        </>
      )}
    </>
  );
};

export default AwsStreams;
