const { catchedAsync } = require("../utils");
module.exports = {
  getCharacter: catchedAsync(require("./getCharacter")),
  postCharacter: catchedAsync(require("./postCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
};
