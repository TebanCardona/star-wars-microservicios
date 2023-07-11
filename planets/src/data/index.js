const Planets = require("./planets.json");
module.exports = {
  list: async () => {
    return Planets;
  },
};
