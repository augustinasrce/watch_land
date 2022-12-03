import { useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import "./searchBar.scss";
import { RootState } from "../../redux/store";
import { updateLogLimit } from "../../redux/reducers/logs";
import { updateStartDate, updateEndDate } from "../../redux/reducers/searchDate";

interface IsearchButtonProps {
  search: (input: string) => void;
  // searchType:'groups' | 'streams' | 'logs'
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

  const setStartDate = (startDate: any) => {
    const payload = { dateStartLimit: startDate };
    const action = updateStartDate(payload);
    dispatch(action);
  };

  const setEndDate = (endDate: any) => {
    const payload = { dateEndLimit: endDate };
    const action = updateEndDate(payload);
    dispatch(action);
  };

  // const search = ()=>{
  // check search type and dispatch the apporiate action

  // }

  return (
    <>
      <div
        className={isFinishDate ? "input-group m-2 col-6 d-flex" : "input-group m-2 col-4 d-flex"}
      >
        {isFinishDate ? (
          <>
            <DatePicker
              className="form-control"
              wrapperClassName="datePicker"
              onChange={(date: Date) => setStartDate(date)}
              selected={startDate}
              name="data-picker"
              dateFormat="yyyy-MM-dd"
            />
            <DatePicker
              className="form-control"
              wrapperClassName="datePicker"
              onChange={(date: Date) => setEndDate(date)}
              selected={endDate}
              name="data-picker"
              dateFormat="yyyy-MM-dd"
            />
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
