const State = require("../Models/StateModel");

module.exports.getStates = async (req, res) => {
  try {
    const result = await State.find({});
    if (result) {
      res.status(200).json({
        message: "States fetched Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to fetch States",
        status: false,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};
