import React from "react";
import Set from "./Set.jsx";
import "../css/grid.css";

const Grid = ({ sets }) => {
  return (
    <>
      <h1>Select an Image Set to Begin</h1>
      <div className="grid">
        {sets.map((set) => (
          <div className="set-container" key={set.id}>
            <Set
              title={set.title}
              years={set.years}
              pictures={set.pictures}
              link={set.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;