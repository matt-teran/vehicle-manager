const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const adminRouter = require("./routes/admin");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(adminRouter);

app.listen(4000);
