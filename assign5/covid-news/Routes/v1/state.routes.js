const express = require("express");
const { getStates } = require("../../Controllers/State.Controllers");
const router = express.Router();

// sign up routes
router.route("/").get(getStates);

module.exports = router;
