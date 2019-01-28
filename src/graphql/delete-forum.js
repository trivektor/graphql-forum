import gql from 'graphql-tag';

const deleteForum = gql`
  mutation deleteForum($id: ID!) {
    deleteForum(id: $id) {
      id
      topic
      description
    }
  }
`;

export {
  deleteForum as default,
};
