import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
// import { countryType } from './country';

export const groupType = new GraphQLObjectType({
  name: 'Group',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Group\'s Name',
    },
    lat: {
      type: GraphQLInt,
      description: 'Group\'s latitude',
    },
    long: {
      type: GraphQLString,
      description: 'Group\'s longitude',
    },
    url: {
      type: GraphQLString,
      description: 'Group\'s webpage url',
    },
    photo: {
      type: GraphQLString,
      description: 'Group\'s photo url',
    },
    hires_photo: {
      type: GraphQLString,
      description: 'Group\'s high resolution photo url',
    },
    meetup_id: {
      type: GraphQLInt,
      required: 'Group\'s unique meetup.com ID',
    },
    meetup_urlname: {
      type: GraphQLString,
      description: 'Group\'s unique meetup-encoded-url name',
    },
    country: {
      type: GraphQLString,
      description: 'Group\'s country (shortcode)',
    },
    localized_country_name: {
      type: GraphQLString,
      description: 'Group\'s country (Full name)',
    },
    assistants_nickname: {
      type: GraphQLString,
      description: 'Group\'s funny name for calling the asistants',
    },
    id: {
      type: GraphQLString,
      description: 'Group\'s unique uuid',
    },
  }),
});


export const groupListType = new GraphQLList(groupType);
