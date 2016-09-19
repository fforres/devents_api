import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import {
  groupById,
  groups,
} from '../definitions/groups';
import {
  eventById,
  eventsByGroup,
  events,
} from '../definitions/events';


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      groupById,
      groups,
      eventById,
      eventsByGroup,
      events,
    }),
  }),
});

export default schema;
