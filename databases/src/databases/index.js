const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");
console.log("\r*******************" + MONGO_URI + "\r ******************");
const schemas = require("./schemas");
const conn = mongoose.createConnection(MONGO_URI);
module.exports = {
  Characters: conn.model("characters", schemas.characterSchema),
  Films: conn.model("films", schemas.filmsSchema),
  Planets: conn.model("planets", schemas.planetSchema),
};
