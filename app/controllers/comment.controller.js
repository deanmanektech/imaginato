const Comment = require("../models/comment.model.js");
const Reply = require("../models/reply.model.js");

// Create and Save a new Comment
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Comment
    const comment = new Comment({
        nickname: req.body.nickname,
        blog_id: req.body.blog_id,
        content: req.body.content,
        created_date: req.body.created_date,
    });

    // Save Comment in the database
    Comment.create(comment, (err, data) => {
        if (err)
            res.status(406).send({
                message: err.message || "Some error occurred while creating the Comment."
            });
        else res.send(data);
    });
};

exports.ReplyCreate = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Comment
    const replyComment = new Reply({
        nickname: req.body.nickname,
        content: req.body.content,
        comment_id: req.body.comment_id,
        created_date: req.body.created_date,

    });

    // Save Comment in the database
    Reply.createReply(replyComment, (err, data) => {
        if (err)
            res.status(406).send({
                message: err.message || "Some error occurred while creating the Comment."
            });
        else res.send(data);
    });
};

// Find a Comment with an article id
exports.findByBlogId = (req, res) => {
    Comment.findByBlogId(req.params.articleId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Comment with id ${req.params.articleId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Comment with id " + req.params.articleId
                });
            }
        } else res.send(data);
    });
}