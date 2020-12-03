const sql = require("./db.js");

const Reply = function(reply) {
    this.nickname = reply.nickname;
    this.content = reply.content;
    this.comment_id = reply.comment_id;
    this.created_date = reply.created_date;
};

Reply.createReply = (newReply, result) => {
    sql.query("INSERT INTO commentreply SET ?", newReply, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newReply });
    });
};

module.exports = Reply;