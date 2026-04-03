// app.js

'use strict';

const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('site'));

var routes = require('./controls/routes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
