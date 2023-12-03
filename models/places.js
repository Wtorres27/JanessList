const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, requires: true },
  city: { type: String, Default: "Anytown" },
  state: { type: String, Default: "USA" },
  founded: Number,
});
module.exports = mongoose.model("Place", placeSchema);
