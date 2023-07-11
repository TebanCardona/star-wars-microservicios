const { Router } = require("express");
const middleware = require("../middleware");
const controllers = require("../controllers");
const router = Router();

router.get("/:model", middleware.modelValidation, controllers.list);
router.get(
  "/:model/:id",
  middleware.modelValidation,
  middleware.idValidations,
  controllers.get
);
router.post("/:model", middleware.modelValidation, controllers.insert);
router.delete(
  "/:model/:id",
  middleware.modelValidation,
  middleware.idValidations,
  controllers.delete
);
router.patch(
  "/:model/:id",
  middleware.modelValidation,
  middleware.idValidations,
  controllers.update
);
module.exports = router;
