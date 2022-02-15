const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
