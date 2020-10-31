const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/zombie_quarentine", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDb;
