import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ProviderService from "../../services/providerService.js";
import Triangle from "../../component/table/triangle.png";
import TriangleRight from "../../component/table/triangleRight.png";
import "../table/table.css";

const TableItem = () => {
  const [streams, setStreams] = useState([]);
  const [isTriangleClicked, setTriangleClicked] = useState(true);

  useEffect(() => {
    ProviderService.fetchStreams()
      .then(response => setStreams(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className="title">
        <h3>TimeStamp</h3>
        <h3>Message</h3>
      </div>
      <section className="main section">
        {streams.map(s => (
          <div
            className={isTriangleClicked ? `${"small-section"}` : `${"small-section-extension"}`}
          >
            <img
              className="img-triangle"
              onClick={() => setTriangleClicked(!isTriangleClicked)}
              src={isTriangleClicked ? Triangle : TriangleRight}
              alt=""
            />
            <div>{s.time}</div>
            <div className="section-message">{s.message}</div>
          </div>
        ))}
      </section>
      <Link className="back-button" to="/">
        Back
      </Link>
    </div>
  );
};

export default TableItem;
