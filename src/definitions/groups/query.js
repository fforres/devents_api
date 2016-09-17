import { GraphQLString, GraphQLNonNull } from 'graphql';
import { groupType, groupListType } from './type';
import { getGroupById, getGroups } from './model';


export const groupById = {
  name: 'getGroupById',
  description: 'Returns one cowork by ID',
  type: groupType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Group\'s unique uuid',
    },
  },
  resolve: (root, { id }) => getGroupById(id),
};

export const groups = {
  name: 'getGroups',
  description: 'Returns a list of groups',
  type: groupListType,
  resolve: () => getGroups(),
};
