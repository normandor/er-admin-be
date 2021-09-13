const { 
    create,
    getRoomById,
    getRooms,
    updateRoom,
    deleteRoom,
    deleteRoomByRoomId,
    isRoomEnabledForUser
} = require("./room.service");
const { sign } = require("jsonwebtoken");
const { json } = require("express");
const { restart } = require("nodemon");

module.exports = {
    createRoom: (req, res) => {
        const body = req.body;
        console.log(req);
        
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "DB connection error"
                });
            }

            return res.status(200).json(results);
        });
    },
    getRoomByRoomId: (req, res) => {
        const id = req.params.id;
        getRoomById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            if (!results) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }

            return res.status(200).json(results);
        });
    },
    getRooms: (req, res) => {
        getRooms((err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
            res.setHeader("X-Total-Count", data.length);
            
            return res.status(200).json(data);
        });
    },
    updateRooms: (req, res) => {
        const body = req.body;

        updateRoom(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            if (results.changedRows === 0) {
                return res.json({
                    success: 0,
                    message: "none updated"
                })
            }

            return res.json({
                id: 1,
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deleteRooms: (req, res) => {
        const body = req.body;
        deleteRoom(body, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            if (!results) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }

            return res.json({
                success: 1,
                message: "room deleted"
            });
        });
    },
    deleteRoomByRoomId: (req, res) => {
        const id = req.params.id;
        deleteRoomByRoomId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            if (!results) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }

            return res.json({
                success: 1,
                message: "room deleted"
            });
        });
    },
    isRoomEnabledForUser: (req, res) => {
        const body = req.body;
        isRoomEnabledForUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            if (!results) {
                return res.status(200).json({
                    enabled: 0
                });
            }

            return res.status(200).json({
                enabled: 1
            });
        });
    },
    optionRooms: (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'DELETE');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        
        next();
    },
};