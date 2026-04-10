// app.js

'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));

// Serve the Vite-built React app (site/dist contains index.html + assets/*)
// before the rest of site/ so that `/` resolves to the built index.html.
app.use(express.static(path.join(__dirname, 'site/dist')));

// Serve the rest of site/: live-demos, img, webfonts, uploads, favicon, etc.
app.use(express.static(path.join(__dirname, 'site')));

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
