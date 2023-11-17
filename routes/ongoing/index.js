const router = require("express").Router();
const ongoing = require("../../controllers/ongoing/ongoing.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.get("/", ongoing.getAllOngoing);
router.post("/create-ongoing", upload.single("file"), ongoing.createOngoing);
router.delete("/:id", auth("admin"), ongoing.deleteOngoing);
router.put("/:id", auth("admin"), ongoing.updateOngoing);

module.exports = router;
