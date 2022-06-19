import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ProviderService from "../../services/providerService.js";
import Triangle from "../../component/table/triangle.png";
import "../table/table.css";

const TableItem = () => {
  const [streams, setStreams] = useState([]);

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
          <div className="small-section">
            <img className="img-triangle" src={Triangle} alt="" />
            <div key={s.time}>{s.time}</div>
            <div className="section-message" key={s.message}>
              {s.message}
            </div>
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
