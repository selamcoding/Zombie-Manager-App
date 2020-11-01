import React, { useState } from "react";

import "./.css";

import MoveLocation from "./move_location";

const ZombiesList = (props) => {
  const [checked, setChecked] = useState([]);

  const checkboxHandler = async (index) => {
    if (index) {
      setChecked((prevState) => [...prevState, index]);
    }
  };

  return (
    <div>
      <h3>Zombies list in quarentine:</h3>
      <MoveLocation values={checked} moveFrom={props.value.location} />

      {props.value.zombies.map((result, i) => {
        return (
          <div key={result._id}>
            <p>
              <input
                type="checkbox"
                onChange={() => {
                  checkboxHandler(result);
                }}
              />
              Name: {result.tag_name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ZombiesList;
