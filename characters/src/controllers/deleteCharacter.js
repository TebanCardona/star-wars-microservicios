const Character = require("../data");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const data = await Character.delete(req.params.id);
  response(res, 201, data);
};
