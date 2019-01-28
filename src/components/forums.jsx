import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, AnchorButton } from '@blueprintjs/core';

const getForums = gql`
  query getForums {
    forums {
      id
      topic
      description
    }
  }
`;

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
                      <Card key={id} style={{ margin: '20px 0' }}>
                        <h4>{topic}</h4>
                        <p>{description}</p>
                      </Card>
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
