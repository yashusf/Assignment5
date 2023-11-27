const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const stateDataRoute = require("./Routes/v1/stateData.route");
const stateRoute = require("./Routes/v1/state.routes")
//global middlewares
app.use(express.json({ limit: "50mb" }));
app.use(cors());

// Increase the request size limit (e.g., 10MB)
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

// user route
app.use("/api/v1/state", stateRoute);
app.use("/api/v1/state-data", stateDataRoute);
app.use("/", async (req, res) => {
  res.send("Route is working!");
});

module.exports = app;
