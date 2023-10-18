const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull
} = require('graphql');

const Ticket = require("./tickets.js");
const Delayed = require("./delayed.js");

const delayedModels = require("../models/QLDelayed.js");
const ticketModels = require("../models/QLTicket.js");

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        tickets: {
            type: new GraphQLList(Ticket),
            description: 'List of all tickets',
            resolve: async function () {
                return await ticketModels.getTickets();
            }
        },
        delays: {
            type: new GraphQLList(Delayed),
            description: 'List of all delays',
            resolve: async function () {
                return await delayedModels.getDelayedTrains();
            }
        }
    })
})

module.exports = RootQueryType;