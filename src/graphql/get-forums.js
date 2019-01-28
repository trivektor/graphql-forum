import gql from 'graphql-tag';

const getForums = gql`
  query getForums {
    forums {
      id
      topic
      description
    }
  }
`;

export {
  getForums as default,
};
