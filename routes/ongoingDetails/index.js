const router = require("express").Router();
const ongoingDetails = require("../../controllers/ongoingDetails/ongoingDetails.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.post("/create-ongoingDetails/:id", ongoingDetails.createOngoingDetails);
router.get("/:id", ongoingDetails.singleOngoingDetails);
router.delete("/:id", ongoingDetails.deleteOngoingDetails);
router.patch("/:id", ongoingDetails.updateOngoingDetails);

module.exports = router;
