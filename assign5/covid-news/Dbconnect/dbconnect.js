const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((db) => console.log("Database connected successfully!"))
    .catch((err) => console.log(err));
};
module.exports = dbConnect;
