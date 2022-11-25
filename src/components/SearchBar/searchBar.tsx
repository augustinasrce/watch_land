import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./searchBar.scss";

interface IsearchButtonProps {
  search: (input: string) => void;
  isFinishDate: boolean;
}

const SearcButton = ({ search, isFinishDate }: IsearchButtonProps) => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [finishDate, setFinishDate] = useState<any>(new Date());
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="input-group m-2 col-5 d-flex">
      <DatePicker
        className="form-control"
        wrapperClassName="datePicker"
        onChange={(date: Date) => setStartDate(date)}
        selected={startDate}
        name="data-picker"
        dateFormat="yyyy-MM-dd"
      />
      {isFinishDate ? (
        <DatePicker
          className="form-control"
          wrapperClassName="datePicker"
          onChange={(date: Date) => setFinishDate(date)}
          selected={finishDate}
          name="data-picker"
          dateFormat="yyyy-MM-dd"
        />
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
  );
};

export default SearcButton;
