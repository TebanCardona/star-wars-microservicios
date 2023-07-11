const {errors} = require("../utils")
module.exports = (req, res, next) => {
  const { model } = req.params
  if (["Characters", "Films", "Planets"].includes(model)) return next();
  else throw new errors.ClientError("Invalid Model", 404)
}