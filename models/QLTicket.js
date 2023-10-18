const mongodb = require('../db/mongodbdb.js');
const fetch = require('node-fetch')

const tickets = {
    getTickets: async function getTickets() {
        const db = (await mongodb.getDb());
        const allTickets = await db.collection.find().toArray();
        return allTickets;
    }
}

module.exports = tickets;