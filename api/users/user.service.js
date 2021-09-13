const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO er_users (firstName, lastName, gender, email, password, number)
            VALUES (?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `SELECT id, firstName, lastName, username, uid, email, number, avatar, gender
            FROM er_users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },
    getUserById: (id, callBack) => {
        pool.query(
            `SELECT id, firstName, lastName, username, uid, email, number, avatar, role, gender
            FROM er_users WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        )
    },
    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE er_users SET firstName = ?, lastName = ?, username = ?, gender = ?, email = ?
            WHERE id = ?`,
            [
                data.first_name,
                data.last_name,
                data.username,
                data.gender,
                data.email,
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
    deleteUser: (data, callBack) => {
        pool.query(
            `DELTE FROM er_users WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        )
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM er_users WHERE email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        )
    },
    getUserByRefreshToken: (refreshToken, verToken, callBack) => {
        pool.query(
            `SELECT firstName, lastName, username, role FROM er_users WHERE refreshToken = ? AND verToken = ?`,
            [refreshToken, verToken],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        )
    },
};