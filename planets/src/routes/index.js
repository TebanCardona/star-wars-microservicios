const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
router.get("/hola", (req, res) => {
  res.send("UwU, </3");
});
router.get("/", controllers.getPlanets);
module.exports = router;
