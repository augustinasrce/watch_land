import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./searchBar.scss";

interface IsearchButtonProps {
  search: (input: string) => void;
  isFinishDate: boolean;
  isDropDownButton: boolean;
}

const SearcButton = ({ search, isFinishDate, isDropDownButton }: IsearchButtonProps) => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [finishDate, setFinishDate] = useState<any>(new Date());
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={isFinishDate ? "input-group m-2 col-8 d-flex" : "input-group m-2 col-5 d-flex"}>
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
          {isDropDownButton ? (
            <>
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default SearcButton;
