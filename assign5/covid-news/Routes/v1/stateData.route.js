const express = require("express");
const { updateStateData, deleteStateDataById, getStateData, createStateData } = require('../../Controllers/StateData.Controllers')
const router = express.Router();

// sign up routes
router.route("/").post(createStateData);
router.route('/getStateData/:stateCode').get(getStateData)
router.route("/:id").patch(updateStateData).delete(deleteStateDataById);

module.exports = router;
