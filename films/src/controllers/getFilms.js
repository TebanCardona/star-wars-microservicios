const { get } = require("../data");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const data = await get(req.params.id);
  response(res, 200, data);
};
