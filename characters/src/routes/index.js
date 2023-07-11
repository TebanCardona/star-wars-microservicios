const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");

router.get("/hola", (req, res) => {
  res.send("Hola amigo! UwU");
});
router.get("/", controllers.getCharacter);
router.post("/", middlewares.characterValidation, controllers.postCharacter);
router.delete("/", controllers.deleteCharacter);
module.exports = router;
