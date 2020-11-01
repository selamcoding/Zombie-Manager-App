import React, { createContext } from "react";
import axios from "axios";

import "./.css";

import List from "./list";
export const ZombieContext = createContext();

class ZombieQuarentine extends React.Component {
  state = {
    data: [],
  };

  fetchZombieData = () => {
    axios.get("http://localhost:3200/api/zombies").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  };

  componentDidMount() {
    this.fetchZombieData();
  }

  render() {
    return (
      <ZombieContext.Provider value={this.fetchZombieData}>
        <div>
          <header>ZOMBIES QUARENTINE MANAGER APP</header>

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
                  <List value={res} />
                </div>
              );
            })}
          </div>
        </div>
      </ZombieContext.Provider>
    );
  }
}

export default ZombieQuarentine;
