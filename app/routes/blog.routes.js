module.exports = app => {
    const blog = require("../controllers/blog.controller.js");
    const comment = require("../controllers/comment.controller.js");

    // TO DO for Blog
    // Post an article
    app.post("/blog", blog.create);

    // List all articles
    app.get("/blog", blog.findAll);

    // Get an article content
    app.get("/blog/:blogId", blog.findOne);


    // TO DO for Comment
    // Comment on an article
    app.post("/comment", comment.create);

    // List all comments of an article
    app.get("/comment/:articleId", comment.findByBlogId);

    // Comment on a comment
    app.post("/comment/Reply", comment.ReplyCreate);
};