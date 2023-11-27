const StateData = require("../Models/StateDataModel");

module.exports.createStateData = async (req, res) => {
  try {
    const data = req.body;
    const isExist = await StateData.find({ date: data?.date });
    if (!isExist) {
      res.status(200).json({
        message: "This State Data on this date Already exists!",
        status: false,
      });
    } else {
      const result = await StateData.create(data);
      if (result) {
        res.status(200).json({
          message: "State Data created Successfully",
          status: true,
          data: result,
        });
      } else {
        res.status(200).json({
          message: "Failed to create State Data",
          status: false,
        });
      }
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};

module.exports.getStateData = async (req, res) => {
  try {
    const {stateCode} = req.params;
    const result = await StateData.find({stateCode: stateCode});
    if (result) {
      res.status(200).json({
        message: "State Data fetched Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to fetch State Data",
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

module.exports.updateStateData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await StateData.findByIdAndUpdate(id, data);
    if (result) {
      res.status(200).json({
        message: "State Data Updated Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to update State Data",
        status: false,
        data: result,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};

module.exports.deleteStateDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await StateData.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({
        message: "State Data deleted Successfully",
        status: true,
        data: result,
      });
    } else {
      res.status(200).json({
        message: "Failed to delete State Data",
        status: false,
        data: result,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
      status: false,
    });
  }
};
