import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLFloat } from 'graphql';
import { venueType } from '../venues';
import { groupType, getGroupById } from '../groups';

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
    plain_text_description: {
      type: GraphQLString,
      description: 'Event\'s text description in plain text (No tags)',
    },
    name: {
      type: GraphQLString,
      description: 'Event\'s given name',
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
    fee: {
      type: GraphQLString,
      description: 'Event\'s fee',
    },
    link: {
      type: GraphQLString,
      description: 'Event\'s reference link',
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
      type: groupType,
      description: 'UTC Offset for the event starting time',
      resolve: data => getGroupById(data.group),
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
