import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./searchBar.scss";
import { RootState } from "../../redux/store";
import { updateLogLimit } from "../../redux/reducers/logs";
import { updateStartDate, updateEndDate } from "../../redux/reducers/searchDate";
import { dateToDateTimeStr } from "../../utils/dates";

interface IsearchButtonProps {
  search: (input: string) => void;
  isFinishDate: boolean;
}

const SearcButton = ({ search, isFinishDate }: IsearchButtonProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const startDate = useSelector((state: RootState) => state.date.startDate);
  const endDate = useSelector((state: RootState) => state.date.endDate);

  const setLimit = (limit: number) => {
    const payload = { logLimit: limit };
    const action = updateLogLimit(payload);
    dispatch(action);
  };

  const setStartDate = (startDate: number) => {
    const payload = { dateStartLimit: startDate };
    const action = updateStartDate(payload);
    dispatch(action);
  };

  const setEndDate = (endDate: number) => {
    const payload = { dateEndLimit: endDate };
    const action = updateEndDate(payload);
    dispatch(action);
  };

  return (
    <>
      <div
        className={isFinishDate ? "input-group m-2 col-9 d-flex" : "input-group m-2 col-4 d-flex"}
      >
        {isFinishDate ? (
          <>
            <>
              <label className="datepicker-label">Start date</label>
              <input
                className="form-control"
                type="datetime-local"
                onChange={ev => {
                  const date = new Date(ev.target.value);
                  const timeStamp = date.getTime();
                  setStartDate(timeStamp);
                }}
                defaultValue={dateToDateTimeStr(startDate)}
                max={dateToDateTimeStr(endDate)}
              ></input>
            </>
            <>
              <label className="datepicker-label">End date</label>
              <input
                className="form-control"
                type="datetime-local"
                onChange={ev => {
                  const date = new Date(ev.target.value);
                  const timeStamp = date.getTime();
                  setEndDate(timeStamp);
                }}
                defaultValue={dateToDateTimeStr(endDate)}
                min={dateToDateTimeStr(startDate)}
              ></input>
            </>
          </>
        ) : null}

        <input
          type="text"
          className="form-control"
          onChange={e => setInputValue(e.target.value)}
          placeholder="Search"
          aria-label="Search-form"
        />
        <div className="input-group-append">
          <span
            className="input-group-text"
            id="basic-addon2"
            role="button"
            onClick={() => search(inputValue)}
          >
            search
          </span>
        </div>
      </div>
      {isFinishDate ? (
        <>
          <div className="btn-group m-2">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Logs
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={() => setLimit(5)}>
                  5
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => setLimit(10)}>
                  10
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => setLimit(15)}>
                  15
                </a>
              </li>
              <li></li>
              <li>
                <a className="dropdown-item" onClick={() => setLimit(20)}>
                  20
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearcButton;
