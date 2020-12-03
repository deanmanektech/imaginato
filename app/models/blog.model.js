const sql = require("./db.js");

// constructor
const Blog = function(blog) {
    this.nickname = blog.nickname;
    this.title = blog.title;
    this.content = blog.content;
    this.created_date = blog.created_date;
};

Blog.create = (newBlog, result) => {
    sql.query("INSERT INTO blog SET ?", newBlog, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newBlog });
    });
};

Blog.findById = (blogId, result) => {
    sql.query(`SELECT * FROM blog WHERE id = ${blogId}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found Blog with the id
        result({ kind: "not_found" }, null);
    });
};

Blog.getAll = result => {
    sql.query("SELECT * FROM blog", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
};


module.exports = Blog;