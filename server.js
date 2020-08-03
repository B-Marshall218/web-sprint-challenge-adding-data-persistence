const express = require('express');
const helmet = require('helmet');

const db = require('./db-config.js');

// server.use("api/projects")

const server = express();

server.use(helmet());
server.use(express.json());



server.get('/api/projects', (req, res) => {

    db('projects')
        .then(species => {
            res.status(200).json(species);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


module.exports = server