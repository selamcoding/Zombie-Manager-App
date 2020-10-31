import React from "react";

import "./.css";

const MoveLocation = (props) => {
  return (
    <div>
      <form  className="move_location">
        <label>
            Move zombies from {}
          <select>
            <option>Move to</option>
            <option value="hospital">Hospital</option>
            <option value="warehouse">Warehouse</option>
            <option value="school">School</option>
          </select>
        </label>
      </form>
    </div>
  );
};
export default MoveLocation;
