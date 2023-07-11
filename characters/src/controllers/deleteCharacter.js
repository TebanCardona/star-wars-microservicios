const Character = require("../data");
const { response } = require("../utils");
module.exports = async (req, res) => {
  await Character.delete();
  response(res, 201, "Character Delete");
};
