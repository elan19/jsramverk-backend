const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull
} = require('graphql');

const Ticket = new GraphQLObjectType({
    name: 'Ticket',
    description: 'This represents a ticket',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        code: { type: GraphQLString },
        trainnumber: { type: GraphQLString },
        traindate: { type: GraphQLString }
    })
})

module.exports = Ticket;