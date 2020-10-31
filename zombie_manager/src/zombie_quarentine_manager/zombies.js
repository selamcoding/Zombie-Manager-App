import React from "react";
import axios from "axios";

import List from "./list";
import MoveLocation from "./move_location";
import "./.css";

class ZombieQuarentine extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3200/api/zombies").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <header>ZOMBIES QUARENTINE MANAGER APP</header>
        <MoveLocation />
        <div className="container">
          {this.state.data.map((res, index) => {
            return (
              <div className="list" key={index}>
                <h3>
                  Location: <p>{res.location} </p>
                </h3>
                <h3>
                  Total number: <p>{res.zombies.length} </p>
                </h3>
                <List value={res.zombies} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ZombieQuarentine;

{
  /* <h3>Zombies list in quarentine:</h3>
 {res.zombies.map((zombie) => {
                  return (
                    <p>
                      ID: {zombie.id} Name: {zombie.tag_name}
                    </p>
                  );
                })} */
}
