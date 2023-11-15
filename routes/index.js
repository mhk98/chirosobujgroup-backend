const router = require("express").Router();
const user = require("./users");
const report = require("./report");
const ongoing = require("./ongoing");
const ongoingDetails = require("./ongoingDetails");
router.use("/user", user);
router.use("/report", report);
router.use("/ongoing", ongoing);
router.use("/ongoingDetails", ongoingDetails);

module.exports = router;
