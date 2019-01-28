import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { AnchorButton } from '@blueprintjs/core';
import { deleteForum, getForums } from '../graphql';
import Forum from './forum';

class Forums extends Component {
  render() {
    return (
      <section>
        <h1>Forums</h1>
        <AnchorButton href="forums/new">New Forum</AnchorButton>
        <Query query={getForums}>
          {
            ({ data, loading }) => {
              if (loading) return <div>Loading...</div>

              return (
                <div>
                  {
                    data.forums.map(({ id, topic, description }) => (
                      <Forum key={id} id={id} topic={topic} description={description} />
                    ))
                  }
                </div>
              )
            }
          }
        </Query>
      </section>
    );
  }
}

export default Forums;
