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
              image={set.image}
              name={set.name}
              type={set.type}
              link={set.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;