import React from "react";

import "./.css";

const ZombiesList = (props) => {
  return (
    <div>
      <h3>Zombies list in quarentine:</h3>
      {props.value.map((zombie) => {
        return (
          <p key={zombie.id}>
            ID: {zombie.id} Name: {zombie.tag_name}
          </p>
        );
      })}
    </div>
  );
};
export default ZombiesList;
