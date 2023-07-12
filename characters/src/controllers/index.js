const { catchedAsync } = require("../utils");
module.exports = {
  listCharacter: catchedAsync(require("./listCharacter")),
  getCharacter: catchedAsync(require("./getCharacter")),
  postCharacter: catchedAsync(require("./postCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
  updateCharacter: catchedAsync(require("./updateCharacter")),
};
