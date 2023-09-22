const database = require('../db/database.js');
const mongodb = require('../db/mongodbdb.js');

const tickets = {
    getTickets: async function getTickets(req, res) {
        //var db = await database.openDb();
        const db = (await mongodb.getDb());

        /*var allTickets = await db.all(`SELECT *, ROWID as id FROM tickets ORDER BY ROWID DESC`);

        await db.close();

        return res.json({
            data: allTickets
        });*/

        const allTickets = await db.collection.find().toArray();

        return res.json({
            data: allTickets
        });
    },

    createTicket: async function createTicket(req, res) {
        //var db = await database.openDb();
        const db = (await mongodb.getDb());

        /*const result = await db.run(
            'INSERT INTO tickets (code, trainnumber, traindate) VALUES (?, ?, ?)',
            req.body.code,
            req.body.trainnumber,
            req.body.traindate,
        );*/

        const doc = {
            code: req.body.code,
            trainnumber: req.body.trainnumber,
            traindate: req.body.traindate
        };

        const result = await db.collection.insertOne(doc);

        //await db.close();

        return res.json({
            data: {
                id: result.lastID,
                code: req.body.code,
                trainnumber: req.body.trainnumber,
                traindate: req.body.traindate,
            }
        });
    }
};

module.exports = tickets;
