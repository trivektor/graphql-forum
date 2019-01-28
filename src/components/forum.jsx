import React, { Component } from 'react';
import { Card, Button, Icon } from '@blueprintjs/core';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { deleteForum, getForums } from '../graphql';

class Forum extends Component {
  updateAfterDelete = (store, { data }) => {
    // https://www.howtographql.com/react-apollo/6-more-mutations-and-updating-the-store/
    const deletedId = data.deleteForum.id;
    const currentStoreData = store.readQuery({ query: getForums });
    const updatedStoreData = currentStoreData.forums.filter(({ id }) => id !== deletedId);
    store.writeQuery({
      query: getForums,
      data: { forums: updatedStoreData },
    });
  }

  render() {
    const { topic, description, id } = this.props;

    return (
      <Mutation
        mutation={deleteForum}
        variables={{ id }}
        update={this.updateAfterDelete}>
        {
          (deleteForumMutation) => {
            return (
              <Card style={{ margin: '20px 0' }}>
                <h4>{topic}</h4>
                <p>{description}</p>
                <Button onClick={deleteForumMutation}>
                  <Icon icon="trash" />
                </Button>
              </Card>
            );
          }
        }
      </Mutation>
    );
  }
}

export default withRouter(Forum);
