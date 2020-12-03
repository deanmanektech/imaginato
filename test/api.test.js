const request = require("supertest")("http://localhost:3000");
const expect = require("chai").expect;

describe("GET /blog", function() {
    it("returns all blogs", async function() {
        const response = await request.get("/blog");
        expect(response.status).to.eql(200);
    });
});

describe("POST /blog", function() {
    it("create blogs", async function() {
        const response = await request
            .post("/blog")
            .send({
                "nickname": "Article TWo",
                "title": "Article second",
                "content": "this is test article",
                "created_date": "2020-12-02 17:57:47"
            });
        expect(response.status).to.eql(200);
    });
});

describe("GET /blog/:id", function() {
    it("get single blog", async function() {
        const response = await request.get("/blog/4"); // here 4 is blog id
        expect(response.status).to.eql(200);
    });
});

describe("GET /comment/:articleId", function() {
    it("get single blog", async function() {
        const response = await request.get("/blog/5"); // here 4 is blog id
        expect(response.status).to.eql(200);
    });
});

describe("POST /comment", function() {
    it("create comment", async function() {
        const response = await request
            .post("/comment")
            .send({
                "nickname": "Nice",
                "content": "atricle",
                "blog_id": "5",
                "created_date": "2020-12-02 17:57:47"
            });
        expect(response.status).to.eql(200);
    });
});

describe("POST /comment/Reply", function() {
    it("comment on a comment", async function() {
        const response = await request
            .post("/comment/Reply")
            .send({
                "nickname": "comment",
                "content": "comment",
                "comment_id": "4",
                "created_date": "2020-12-02 17:57:47"
            });
        expect(response.status).to.eql(200);
    });
});