const store = require("../databases");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const [{ model }, info] = [req.params, req.body];
  const data = await store[model].insert(info);
  response(res, 200, data);
};
