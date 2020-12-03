const Blog = require("../models/blog.model.js");

// Create and Save a new Blog
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Blog
    const blog = new Blog({
        nickname: req.body.nickname,
        title: req.body.title,
        content: req.body.content,
        created_date: req.body.created_date,

    });

    // Save Blog in the database
    Blog.create(blog, (err, data) => {
        if (err)
            res.status(406).send({
                message: err.message || "Some error occurred while creating the Blog."
            });
        else res.send(data);
    });
};

// Retrieve all blogs from the database.
exports.findAll = (req, res) => {
    Blog.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving blogs."
            });
        else res.send(data);
    });
};

// Find a single Blog with a blogId
exports.findOne = (req, res) => {
    Blog.findById(req.params.blogId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Blog with id ${req.params.blogId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Blog with id " + req.params.blogId
                });
            }
        } else res.send(data);
    });
};