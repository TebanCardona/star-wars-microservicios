const { list } = require("../data");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const characters = await list();
  response(res, 200, { total: characters.length, characters });
};
