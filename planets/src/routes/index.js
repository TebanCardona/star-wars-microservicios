const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");
router.get("/hola", (req, res) => {
  res.send("UwU, </3");
});
router.get("/", controllers.listPlanets);
router.get("/:id", controllers.getPlanets);
router.post("/", middlewares.characterValidation, controllers.postPlanets);
router.delete("/:id", controllers.deletePlanets);
router.post("/:id", controllers.updatePlanets);
module.exports = router;
