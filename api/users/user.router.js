const { 
    createUser, 
    getUserByUserId, 
    getUsers, 
    updateUsers, 
    deleteUsers, 
    login,
    refreshToken,
    logout
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const authorize = require("../../auth/authorize");

router.post("/", checkToken, createUser);
router.get("/", [checkToken, authorize('ADMIN')], getUsers);
// router.get("/", getUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUsers);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

module.exports = router;