import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLFloat } from 'graphql';
import { venueType } from '../venues';

export const eventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Event\'s unique uuid',
      resolve: data => data._id,
    },
    description: {
      type: GraphQLString,
      description: 'Event\'s Name',
    },
    assistants_limit: {
      type: GraphQLInt,
      description: 'Event current rsvp limit',
    },
    assistants_current: {
      type: GraphQLInt,
      description: 'Event current rsvp\'d number',
    },
    assistants_waitlist: {
      type: GraphQLInt,
      description: 'Event current rsvp waiting list',
    },
    time: {
      type: GraphQLFloat,
      description: 'Event starting time',
    },
    utc_offset: {
      type: GraphQLInt,
      description: 'UTC Offset for the event starting time',
    },
    group: {
      type: GraphQLString,
      description: 'UTC Offset for the event starting time',
    },
    venue: {
      type: venueType,
    },
    meetup_id: {
      type: GraphQLInt,
      required: 'Event\'s unique meetup.com ID',
    },
  }),
});


export const eventListType = new GraphQLList(eventType);
