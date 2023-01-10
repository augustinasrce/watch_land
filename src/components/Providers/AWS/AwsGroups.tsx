import { useEffect, useState } from "react";
import { IAwsLogGroups } from "../../../services/aws/spec";
import { tableCellObject } from "../../../utils/objects";
import { ITableCell } from "../../spec";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { updateLoadingState } from "../../../redux/reducers/loading";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";
import { timestampToDate } from "../../timestampToDate";
import SearcBar from "../../SearchBar/searchBar";
import Spinner from "../../Spinner/Spinner";

const AwsGroups = () => {
  const dispatch = useDispatch();
  const [groups, setGroups] = useState<IAwsLogGroups[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [empty, setEmpty] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const stateLoading = useSelector((state: RootState) => state.loading.loading);

  const setLoading = (loading: boolean) => {
    const payload = { loadingData: loading };
    const action = updateLoadingState(payload);
    dispatch(action);
  };

  const loadGroups = async (prefix?: string | undefined) => {
    let dataGroups: IAwsLogGroups[] = [];
    setLoading(true);
    CloudWatch.groups(prefix)
      .observe(data => {
        dataGroups = dataGroups.concat(data);
        setGroups(data);
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
    if (groups.length === 0) setEmpty(true);
    else setEmpty(false);
  }, [stateLoading, groups]);

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    const bodyCells = () => {
      return [
        ...groups?.map((group: IAwsLogGroups) => {
          const groupName = tableCellObject(
            group.logGroupName,
            true,
            `/aws/streams?group=${group.logGroupName}`
          );
          const creationTime = tableCellObject(timestampToDate(group.creationTime), false, "");
          return [groupName, creationTime];
        })
      ];
    };
    setBody(bodyCells);
  }, [groups]);

  return (
    <>
      {error ? <ErrorAlert /> : null}
      {stateLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-between pt-4 pb-4">
            <BackButton />
            <SearcBar placeHolder="Search prefix" search={loadGroups} isFinishDate={false} />
          </div>
          {empty ? (
            <p>No results</p>
          ) : (
            <Table headers={["Log group", "Creation time"]} body={body} openable={false} />
          )}
        </>
      )}
    </>
  );
};

export default AwsGroups;
