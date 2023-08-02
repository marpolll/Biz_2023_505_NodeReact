import http from "http";

http
  .createServer((req, res) => {
    console.log("hello my server");
    res.end("<h1>hello</h1>");
  })
  .listen(8080);
