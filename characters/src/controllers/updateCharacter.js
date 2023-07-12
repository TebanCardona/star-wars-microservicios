const { update } = require("../data");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const data = await update(req.params.id, req.body);
  response(res, 200, data);
};
