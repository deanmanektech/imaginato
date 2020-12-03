const sql = require("./db.js");

// constructor
const Comment = function(comment) {
    this.nickname = comment.nickname;
    this.content = comment.content;
    this.blog_id = comment.blog_id;
    this.created_date = comment.created_date;
};

Comment.create = (newComment, result) => {
    sql.query("INSERT INTO comment SET ?", newComment, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newComment });
    });
};

Comment.findByBlogId = (blogId, result) => {
    sql.query(`SELECT cmnt.*,cmntRply.nickname as replyComment FROM comment as cmnt left JOIN commentreply as cmntRply on cmnt.id=cmntRply.comment_id  WHERE cmnt.blog_id = ${blogId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res);
            return;
        }
        // not found Comment with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = Comment;