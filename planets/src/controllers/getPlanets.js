module.exports = async (req, res) => {
  const planets = await require("../data").list();
  require("../utils").response(res, 200, planets);
};
