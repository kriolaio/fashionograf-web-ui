import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Books from "./Books";

import "./App.css";

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>
            <span role="img" aria-label="rocket">
              My first Apollo app 🚀
              <Books />
            </span>
          </h2>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
