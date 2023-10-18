const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');

const LocationType = new GraphQLObjectType({
    name: 'Location',
    description: 'This represents a location',
    fields: () => ({
        LocationName: { type: GraphQLString },
        Priority: { type: GraphQLInt },
        Order: { type: GraphQLInt }
    })
});
module.exports = LocationType;