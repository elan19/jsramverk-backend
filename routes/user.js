const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        data: {
            msg: "Got a GET request"
        }
    });
});

router.get("/hello/:msg", (req, res) => {
    res.json({
        data: {
            msg: req.params.msg
        }
    });
});

router.post("/", (req, res) => {
    res.status(201).json({
        data: {
            msg: "Got a POST request"
        }
    });
});

router.put("/", (req, res) => {
    res.send(204).send();
});


router.delete("/", (req, res) => {
    res.status(204).send();
});

module.exports = router;
