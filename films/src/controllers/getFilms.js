module.exports = async (req, res) => {
  const films = await require("../data").list();
  require("../utils").response(res, 200, films);
};
