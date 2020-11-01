import React, { useContext, useState } from "react";
import axios from "axios";

import "./.css";

import { ZombieContext } from "./zombies";

const MoveLocation = (props) => {
  const fetchData = useContext(ZombieContext);
  
  const [val, setValue] = useState("");

  const onchangeHandler = async (event) => {
    setValue(event.target.value);

    await axios.post("http://localhost:3200/api/zombies/move-location", {
      moveTo: event.target.value,
      zombies: props.values,
      moveFrom: props.moveFrom,
    });

    fetchData();
  };

  return (
    <div>
      <form className="move_location">
        <label>
          <select value={val} onChange={onchangeHandler}>
            <option>Move zombies to</option>
            <option value="Hospital">Hospital</option>
            <option value="Warehouse">Warehouse</option>
            <option value="School">School</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default MoveLocation;
