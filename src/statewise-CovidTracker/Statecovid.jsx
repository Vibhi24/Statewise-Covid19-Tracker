import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./statecovid.css";

const Statecovid = () => {
  const [data, setData] = useState([]);

  const getcovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      //   console.log(actualData);
      setData(actualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getcovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="text_center mb-5">🔥 Statewise Covid Tracker 🔥</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Recovered</th>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curelem, index) => {
                return (
                  <tr>
                    <th>{curelem.state}</th>
                    <td>{curelem.recovered}</td>
                    <td>{curelem.confirmed}</td>
                    <td>{curelem.deaths}</td>
                    <td>{curelem.active}</td>
                    <td>{curelem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statecovid;
