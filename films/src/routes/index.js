const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");
router.get("/hola", (req, res) => {
  res.send("UwU, </3");
});
router.get("/", controllers.listFilms);
router.get("/:id", controllers.getFilms);
router.post("/", middlewares.characterValidation, controllers.postFilms);
router.delete("/:id", controllers.deleteFilms);
router.post("/:id", controllers.updateFilms);
module.exports = router;
