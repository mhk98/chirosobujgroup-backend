const router = require("express").Router();
const ongoing = require("../../controllers/ongoing/ongoing.controller");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

router.get("/", ongoing.getAllOngoing);
router.post("/create-ongoing", upload, ongoing.createOngoing);
router.delete("/:id", auth("admin"), ongoing.deleteOngoing);
router.put("/:id", auth("admin"), ongoing.updateOngoing);

module.exports = router;
