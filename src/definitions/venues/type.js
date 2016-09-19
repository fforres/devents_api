import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
// import { countryType } from './country';

export const venueType = new GraphQLObjectType({
  name: 'Venue',
  fields: () => ({
    meetup_id: {
      type: GraphQLInt,
      description: 'Event\'s unique meetup venue id',
    },
    address: {
      type: GraphQLString,
      description: 'Event\'s venue address',
    },
    name: {
      type: GraphQLString,
      description: 'Event\'s venue name',
    },
    lat: {
      type: GraphQLString,
      description: 'Event\'s venue location, latitude',
    },
    lon: {
      type: GraphQLString,
      description: 'Event\'s venue location, longitude',
    },
    city: {
      type: GraphQLString,
      description: 'Event\'s venue location, city',
    },
    country: {
      type: GraphQLString,
      description: 'Event\'s Venue country (shortcode) location',
    },
    localized_country_name: {
      type: GraphQLString,
      description: 'Event\'s Venue country  Full name)',
    },
  }),
});


export const venueListType = new GraphQLList(venueType);
