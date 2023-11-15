const router = require("express").Router();
const user = require("../../controllers/users/users.controller");
const auth = require("../../middlewares/auth");

router.post("/signup", user.signup);
router.post("/login", user.login);
router.post("/refresh-token", user.refreshToken);
router.get("/", auth("admin"), user.getAllUsers);
router.get("/:id", auth("admin", "user"), user.getSingleUser);

module.exports = router;
