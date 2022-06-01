import React, { useEffect, useState } from "react";
import TableBody from "./tableBody";
import axios from "axios";
import "./table.css";

const Table = () => {
  const [dummyDataId, setDummyDataId] = useState("");
  const [dummyDataName, setDummyDataName] = useState("");
  const [dummyDataAuthor, setDummyDataAuthor] = useState("");

  const url = "http://localhost:3004/posts/1";

  const getDummyData = async () => {
    await axios
      .get(url)
      .then(response => {
        const allDummyDataId = response.data.id;
        const allDummyDataName = response.data.title;
        const allDummyDataAuthor = response.data.author;
        setDummyDataId(allDummyDataId);
        setDummyDataName(allDummyDataName);
        setDummyDataAuthor(allDummyDataAuthor);
        console.log(response);
        console.log(allDummyDataName);
      })
      .catch(error => alert("broken"));
  };

  useEffect(() => {
    getDummyData();
  }, []);

  return (
    <div className="table-container">
      <TableBody
        dummyDataId={dummyDataId}
        dummyDataName={dummyDataName}
        dummyDataAuthor={dummyDataAuthor}
      />
    </div>
  );
};

export default Table;
