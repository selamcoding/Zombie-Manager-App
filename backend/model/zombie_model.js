const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zombieSchema = new Schema({
  location: { type: String },
  zombies: [],
});

module.exports = mongoose.model("zombie", zombieSchema);
