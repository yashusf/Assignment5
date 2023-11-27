const { default: mongoose } = require("mongoose");
const stateSchema = mongoose.Schema(
  {
    stateCode: {
      type: String,
      required: true,
    },
    stateName: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const State = mongoose.model("State", stateSchema);
module.exports = State;
