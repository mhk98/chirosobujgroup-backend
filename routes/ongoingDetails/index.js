const router = require("express").Router();
const ongoingDetails = require("../../controllers/ongoingDetails/ongoingDetails.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.post(
  "/create-ongoingDetails/:id",
  upload.array("files"),
  ongoingDetails.createOngoingDetails
);
router.get("/:id", ongoingDetails.getAllOngoingDetails);
router.delete("/:id", ongoingDetails.deleteOngoingDetails);
// router.put("/:id", auth("admin"), ongoingDetails.updateOngoingDetails);

module.exports = router;
