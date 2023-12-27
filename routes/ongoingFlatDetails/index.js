const router = require("express").Router();
const ongoingFlatDetails = require("../../controllers//ongoingFlatDetails/ongoingFlatDetails.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.post(
  "/create-ongoingFlatDetails/:id",
  upload.array("files"),
  ongoingFlatDetails.createOngoingFlatDetails
);
router.get("/:id/:floor/:flat", ongoingFlatDetails.getAllongoingFlatDetails);
router.delete("/:id", ongoingFlatDetails.deleteongoingFlatDetails);
router.patch(
  "/:id",
  upload.array("files"),
  ongoingFlatDetails.updateongoingFlatDetails
);

module.exports = router;
