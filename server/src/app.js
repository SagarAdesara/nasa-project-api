const path = require("path");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const v1Router = require("./routes/version1");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", v1Router);

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = app;
