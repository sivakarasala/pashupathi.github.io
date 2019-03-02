import React, { Component } from "react";

import CardList from "./components/CardList";

class App extends Component {
  state = {};
  componentDidMount() {
    let requestBody = {
      query: `query {
        viewer {
          name
          location
           repositories(last:10) {
             nodes {
               name
              id
              url
             }
           }
         }
      }`
    };
    fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 3b1cd049662945ecb46ea8c020e75b42cd111c9d"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState({
          gitHub: resData.data.viewer.repositories.nodes
        });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    console.log(this.state.gitHub);
    return (
      <div>
        {this.state !== {} ? <CardList repos={this.state.gitHub} /> : ""}
      </div>
    );
  }
}

export default App;
