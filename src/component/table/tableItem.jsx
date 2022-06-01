import React from "react";

const TableItem = ({ dummyDataAuthor }) => {
  return (
    <div>
      <h1>TableItem</h1>
      <ol>
        <li>{dummyDataAuthor}</li>
      </ol>
    </div>
  );
};

export default TableItem;
