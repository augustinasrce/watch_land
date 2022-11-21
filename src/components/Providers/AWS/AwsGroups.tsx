import { useEffect, useState } from "react";
import { IAwsLogGroups } from "../../../services/aws/spec";
import { tableCellObject } from "../../../utils/objects";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";
import { timestampToDate } from "../../timestampToDate";
import Spinner from "../../Spinner/Spinner";
import SearcButton from "../../SearchButton/searchButton";

const AwsGroups = () => {
  const [groups, setGroups] = useState<IAwsLogGroups[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const loadGroups = async () => {
    setLoading(true);
    CloudWatch.groups()
      .observe(data => {
        setGroups(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  };

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

  const search = (value: string) => {
    const filter = groups.filter(g => g.logGroupName.toLowerCase().includes(value.toLowerCase()));
    setGroups(filter);
  };

  return (
    <>
      {error ? <ErrorAlert /> : null}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <BackButton />
            <SearcButton search={search} />
          </div>
          <Table headers={["Log group", "Creation time"]} body={body} openable={false} />
        </>
      )}
    </>
  );
};

export default AwsGroups;
