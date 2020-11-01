const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zombieSchema = new Schema({
  location: { type: String, required: true },
  zombies: [
    {
      tag_name: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("zombie", zombieSchema);
