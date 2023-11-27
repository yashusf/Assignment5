const { default: mongoose } = require("mongoose");
const stateDataSchema = mongoose.Schema(
    {
        stateCode: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        positive: {
            type: String,
            required: true,
        },
        death: {
            type: String,
            required: true,
        },
        recovered: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const StateData = mongoose.model("StateData", stateDataSchema);
module.exports = StateData;
