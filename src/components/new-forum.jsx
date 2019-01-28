import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
  FormGroup,
  InputGroup,
  Button,
} from '@blueprintjs/core';

const createForum = gql`
  mutation createForum($topic: String!, $description: String!) {
    createForum(topic: $topic, description: $description) {
      id
      topic
      description
    }
  }
`;

class NewForum extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      description: '',
    };
  }

  onCompleted = () => {
    this.props.history.push('/forums');
  }

  render() {
    const {
      topic,
      description,
    } = this.state;

    return (
      <Mutation
        mutation={createForum}
        variables={{ topic, description }}
        onCompleted={this.onCompleted}>
        {
          (createForumMutation, { data }) => {
            const onSubmit = (event) => {
              event.preventDefault();
              createForumMutation();
            };

            return (
              <form onSubmit={onSubmit}>
                <h1>New Forum</h1>
                <section>
                  <FormGroup
                    label="Topic">
                    <InputGroup
                      autoFocus
                      value={topic}
                      onChange={(event) => this.setState({ topic: event.target.value })} />
                  </FormGroup>
                  <FormGroup
                    label="Description">
                    <InputGroup
                      value={description}
                      onChange={(event) => this.setState({ description: event.target.value })} />
                  </FormGroup>
                  <Button type="submit">Create</Button>
                </section>
              </form>
            );
          }
        }
      </Mutation>
    );
  }
}

export {
  NewForum as default,
};
