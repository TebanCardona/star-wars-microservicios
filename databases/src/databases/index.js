const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");
console.log(MONGO_URI);
const schemas = require("./schemas");
const conn = mongoose.createConnection(MONGO_URI);
module.exports = {
  Characters: conn.model("characters", schemas.characterSchema),
  Films: conn.model("films", schemas.filmsSchema),
  Planets: conn.model("planets", schemas.planetSchema),
};
