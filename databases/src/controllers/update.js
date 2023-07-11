const store = require("../databases");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const [{ model, id }, info] = [req.params, req.body];
  const data = await store[model].update(id, info);
  response(res, 200, data);
};
