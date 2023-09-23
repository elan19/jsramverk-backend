require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const fetchTrainPositions = require('./models/trains.js')
const delayed = require('./routes/delayed.js');
const tickets = require('./routes/tickets.js');
const codes = require('./routes/codes.js');
const user = require('./routes/user.js');

const app = express()
const httpServer = require("http").createServer(app);

app.use(cors());
app.options('*', cors());

app.disable('x-powered-by');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["https://www.student.bth.se", "https://www.student.bth.se/~elan19/editor/", "http://localhost:8080"],
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 1337;

app.use("/delayed", delayed);
app.use("/tickets", tickets);
app.use("/codes", codes);
app.use("/user", user);

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

fetchTrainPositions(io);

module.exports = httpServer;