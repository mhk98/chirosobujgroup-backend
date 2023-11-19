const router = require("express").Router();
const user = require("./users");
const report = require("./report");
const ongoing = require("./ongoing");
const ongoingDetails = require("./ongoingDetails");
const ongoingFlatDetails = require("./ongoingFlatDetails");
router.use("/user", user);
router.use("/report", report);
router.use("/ongoing", ongoing);
router.use("/ongoingDetails", ongoingDetails);
router.use("/ongoingFlatDetails", ongoingFlatDetails);

module.exports = router;
