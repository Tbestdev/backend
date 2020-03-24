const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const http = require("http");

const connectToDb = require("./db");
const router = require("./routes/contactMe");

const app = express();
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

/* Cross-Origin Resource Sharing CORS
To enable access of resources require(our server */
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

server.listen(PORT, async () => {
  await connectToDb();
  console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
