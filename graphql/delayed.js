const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

const LocationType = require('./locationType.js');

const delay = new GraphQLObjectType({
    name: 'Delay',
    description: 'This represents a delay',
    fields: () => ({
        ActivityId: { type: new GraphQLNonNull(GraphQLString) },
        ActivityType: { type: GraphQLString },
        AdvertisedTimeAtLocation: { type: GraphQLString },
        AdvertisedTrainIdent: { type: GraphQLString },
        Canceled: { type: GraphQLBoolean },
        EstimatedTimeAtLocation: { type: GraphQLString },
        FromLocation: {
            type: new GraphQLList(LocationType),
            resolve: (parent) => {
                return parent.FromLocation
            }
        },
        LocationSignature: { type: GraphQLString },
        OperationalTrainNumber: { type: GraphQLString },
        ToLocation: {
            type: new GraphQLList(LocationType),
            resolve: (parent) => {
                return parent.ToLocation
            }
        },
        TrainOwner: { type: GraphQLString }
    })
})

module.exports = delay;