const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO er_rooms (name, enabled)
            VALUES (?,?)`,
            [
                data.name,
                data.enabled
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getRooms: callBack => {
        pool.query(
            `SELECT id, name, enabled
            FROM er_rooms`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    getRoomById: (id, callBack) => {
        pool.query(
            `SELECT id, name, enabled
            FROM er_rooms WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        )
    },
    updateRoom: (data, callBack) => {
        pool.query(
            `UPDATE er_rooms SET name = ?, enabled = ?
            WHERE id = ?`,
            [
                data.name,
                data.enabled,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    deleteRoom: (data, callBack) => {
        pool.query(
            `DELETE FROM er_rooms WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        )
    },
    deleteRoomByRoomId: (id, callBack) => {
        pool.query(
            `DELETE FROM er_rooms WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        )
    },
    isRoomEnabledForUser: (data, callBack) => {
        pool.query(
            `SELECT COUNT(*) as cnt 
            FROM er_rooms_users eru, er_rooms er, er_users eu
            WHERE eru.roomId = er.id AND eru.userId = eu.id AND
            eu.uid = ? AND er.name = ? `,
            [data.userId, data.roomName],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0].cnt == 1);
            }
        )
    },
};