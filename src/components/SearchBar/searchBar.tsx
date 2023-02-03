import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SearchBar.scss";
import { RootState } from "../../redux/store";
import { updateStartDate, updateEndDate } from "../../redux/reducers/searchDate";
import { dateToDateTimeStr } from "../../utils/dates";

interface IsearchButtonProps {
  placeHolder: string;
  search: (input: string) => void;
  isFinishDate: boolean;
}

const SearcButton = ({ placeHolder, search, isFinishDate }: IsearchButtonProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const startDate = useSelector((state: RootState) => state.date.startDate);
  const endDate = useSelector((state: RootState) => state.date.endDate);

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
      <div className={isFinishDate ? "input-group col-9 d-flex" : "input-group col-4 d-flex"}>
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
          placeholder={placeHolder}
          aria-label="Search-form"
        />
        <div className="input-group-append">
          <span
            className="input-group-text"
            id="basic-addon2"
            role="button"
            onClick={() => search(inputValue)}
          >
            Search
          </span>
        </div>
      </div>
    </>
  );
};

export default SearcButton;
