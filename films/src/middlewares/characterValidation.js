const { ClientError } = require("../utils/errors");
module.exports = (req, res, next) => {
  const { title } = req.body;
  if (title) {
    return next();
  } else throw new ClientError("Send a title", 401);
};
