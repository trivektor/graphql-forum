export const resolvers = {
  Query: {
    forums: async (_, __, { dataSources }) => {
      const { forums } = await dataSources.forum.getAll();

      return forums;
    },
  },
  Mutation: {
    createForum: async (_, args, { dataSources }) => {
      const { topic, description } = args;

      return await dataSources.forum.create(topic, description);
    },

    deleteForum: async (_, args, { dataSources }) => {
      const { id } = args;

      return await dataSources.forum.destroy(id);
    }
  }
};
