const { 
    createRoom, 
    getRoomByRoomId, 
    getRooms, 
    updateRooms, 
    deleteRooms,
    deleteRoomByRoomId,
    optionRooms,
    isRoomEnabledForUser
} = require("./room.controller");
var cors = require('cors');
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

// router.post("/", checkToken, createRoom);
// router.get("/", checkToken, getRooms);
// router.get("/:id", checkToken, getRoomByRoomId);
// router.patch("/", checkToken, updateRooms);
// router.delete("/", checkToken, deleteRooms);

// router.options('/:id', cors()) // enable pre-flight request for DELETE request
// router.delete('/:id', cors(), deleteRooms);


router.put("/", checkToken, createRoom);
router.post("/", checkToken, createRoom);
router.get("/", checkToken, getRooms);
router.get("/available", checkToken, isRoomEnabledForUser);
router.get("/:id", checkToken, getRoomByRoomId);
router.put("/", checkToken, updateRooms);
router.put("/:id", checkToken, updateRooms);
router.patch("/", checkToken, updateRooms);
router.delete("/", checkToken, deleteRooms);
router.options("/", checkToken, optionRooms);
router.delete("/:id", checkToken, deleteRoomByRoomId);
router.options("/:id", checkToken, optionRooms);




module.exports = router;