import { useState } from "react";
import "./SearchBar.scss";

interface Props {
  placeHolder: string;
  setFilterQuery: (input: string) => void;
}

const SearchBar = ({ placeHolder, setFilterQuery }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="input-group col-4 d-flex">
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
          onClick={() => setFilterQuery(inputValue)}
        >
          Search
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
