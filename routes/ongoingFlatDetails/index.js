const router = require("express").Router();
const ongoingFlatDetails = require("../../controllers//ongoingFlatDetails/ongoingFlatDetails.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.post(
  "/create-ongoingFlatDetails/:id",
  upload.array("files"),
  ongoingFlatDetails.createOngoingFlatDetails
);
router.get("/:id", ongoingFlatDetails.getAllongoingFlatDetails);
router.delete("/:id", ongoingFlatDetails.deleteongoingFlatDetails);
// router.put("/:id", auth("admin"), ongoingDetails.updateOngoingDetails);

module.exports = router;
