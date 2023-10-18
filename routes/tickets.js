const express = require('express');
const router = express.Router();

const tickets = require("../models/tickets.js");

router.get('/', (req, res) => tickets.getTickets(req, res));

router.post('/', (req, res) => tickets.createTicket(req, res));

router.put('/:ticketId', (req, res) => tickets.updateTicket(req, res));

module.exports = router;
