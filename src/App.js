import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@blueprintjs/core/lib/css/blueprint.css';

import { Forums, NewForum } from './components';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
})
const client = new ApolloClient({
  cache,
  link
});

class App extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <Route path="/" exact component={Forums} />
              <Route path="/forums" exact component={Forums} />
              <Route path="/forums/new" exact component={NewForum} />
            </div>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
