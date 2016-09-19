import { GraphQLString, GraphQLNonNull } from 'graphql';
import { eventType, eventListType } from './type';

import { getEventById, getEventByGroupId, getEvents } from './model';

export const eventById = {
  name: 'getEventById',
  description: 'Returns one event by ID',
  type: eventType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Event unique uuid',
    },
  },
  resolve: (root, { id }) => getEventById(id),
};

export const eventsByGroup = {
  name: 'getEventByGroup',
  description: 'Returns one event by its\'s group id',
  type: eventListType,
  args: {
    groupId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Group unique uuid',
    },
  },
  resolve: (root, { id }) => getEventByGroupId(id),
};

export const events = {
  name: 'getEvents',
  description: 'Returns a list of events',
  type: eventListType,
  resolve: () => getEvents(),
};
