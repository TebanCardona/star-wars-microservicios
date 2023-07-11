const { catchedAsync } = require("../utils");

module.exports = {
  list: catchedAsync(require("./list")),
  get: catchedAsync(require("./get")),
  insert: catchedAsync(require("./insert")),
  delete: catchedAsync(require("./delete")),
  update: catchedAsync(require("./update")),
};
