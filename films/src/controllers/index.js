const { catchedAsync } = require("../utils");
module.exports = {
  listFilms: catchedAsync(require("./listFilms")),
  getFilms: catchedAsync(require("./getFilms")),
  postFilms: catchedAsync(require("./postFilms")),
  deleteFilms: catchedAsync(require("./deleteFilms")),
  updateFilms: catchedAsync(require("./updateFilms")),
};
