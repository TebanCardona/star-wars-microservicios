const { create } = require("../data");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const data = await create(req.body);
  response(res, 200, data);
};
