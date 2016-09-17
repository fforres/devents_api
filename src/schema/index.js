import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import {
  groupById, groups,
} from '../definitions/groups';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      groupById,
      groups,
    }),
  }),
});

export default schema;
