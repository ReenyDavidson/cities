import React from "react";
import { data } from "./data";
import "../styles/Baller.css";

const Baller = () => {
  const alldata = data.map((datum) => {
    const { img, name, population, club, id } = datum;
    return (
      <div className="baller-container" key={id}>
        <div>
          <img src={img} alt="A footballer" className="img" />
        </div>
        <div className="info-content">
          <h2 className="name"> {name}</h2>
          <h3 className="age">Population: {population}</h3>
          <p className="club">{club}</p>
        </div>
      </div>
    );
  });
  return <div>{alldata}</div>;
};
export default Baller;
