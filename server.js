const express = require('express');
const helmet = require('helmet');

const db = require('./db-config.js');

// server.use("api/projects")

const server = express();

server.use(helmet());
server.use(express.json());



server.get('/api/projects', (req, res) => {

    db('projects')
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});
server.get('/api/resources', (req, res) => {

    db('resources')
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.get('/api/tasks', (req, res) => {

    db('tasks')
        .then(task => {
            res.status(200).json(task);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.get('/api/project_resources', (req, res) => {

    db('project_resources')
        .then(pr => {
            res.status(200).json(pr);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});
server.post("/api/projects", (req, res) => {
    db("projects").insert(req.body)
        .then(ids => {
            const id = ids[0]
            db("projects")
                .where({ id })
                .first()
                .then(project => {
                    res.status(201).json(project)
                })
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

server.post("/api/resources", (req, res) => {
    db("resources").insert(req.body)
        .then(ids => {
            const id = ids[0]
            db("resources")
                .where({ id })
                .first()
                .then(resource => {
                    res.status(201).json(resource)
                })
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

server.post("/api/tasks", (req, res) => {
    db("tasks").insert(req.body)
        .then(ids => {
            const id = ids[0]
            db("tasks")
                .where({ id })
                .first()
                .then(task => {
                    res.status(201).json(task)
                })
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

module.exports = server