const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  var { id } = req.params;
  id = Number(id)
  if (Number.isSafeInteger(id)) return next()
  else throw new ClientError("Invalid Id, please check the id", 400)
}