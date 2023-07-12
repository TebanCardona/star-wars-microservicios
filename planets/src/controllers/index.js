const { catchedAsync } = require("../utils");
module.exports = {
  listPlanets: catchedAsync(require("./listPlanets")),
  getPlanets: catchedAsync(require("./getPlanets")),
  postPlanets: catchedAsync(require("./postPlanets")),
  deletePlanets: catchedAsync(require("./deletePlanets")),
  updatePlanets: catchedAsync(require("./updatePlanets")),
};
