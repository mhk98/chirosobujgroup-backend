const router = require("express").Router();
const ongoingDetails = require("../../controllers/ongoingDetails/ongoingDetails.controller");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

router.post(
  "/create-ongoingDetails/:id",
  upload,
  ongoingDetails.createOngoingDetails
);
router.get("/", ongoingDetails.getAllOngoingDetails);
router.get("/:id", ongoingDetails.singleOngoingDetails);
router.delete("/:id", ongoingDetails.deleteOngoingDetails);
router.put("/:id", auth("admin"), ongoingDetails.updateOngoingDetails);

module.exports = router;
