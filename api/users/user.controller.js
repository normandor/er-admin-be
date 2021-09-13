const {
    create,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
    getUserByUserEmail,
    getUserByRefreshToken
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { json } = require("express");
const { restart } = require("nodemon");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(req);
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "DB connection error"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
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
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
            res.setHeader("X-Total-Count", data.length);

            return res.json(data);
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);

        // update password should be another call
        if (typeof body.password !== 'undefined') {
            body.password = hashSync(body.password, salt);
        }

        updateUser(body, (err, results) => {
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
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deleteUsers: (req, res) => {
        const body = req.body;
        deleteUser(body, (err, result) => {
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
                message: "user deleted"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }

            if (!results) {
                return res.json({
                    success: 0,
                    data: "Email o clave errónea"
                });
            }

            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({
                    lastName: results.lastName,
                    firstName: results.firstName,
                    role: results.role
                }, "definedKeyInEnv", {
                    expiresIn: "10m"
                });

                var today = new Date();
                today.setHours(today.getHours() + 4);

                res.cookie("refreshToken", results.refreshToken, {
                    // secure: process.env.NODE_ENV !== "development",
                    secure: false,
                    httpOnly: true,
                    expires: today,
                    domain: 'localhost',
                    sameSite: 'None',
                    secure: true
                });

                res.cookie("verToken", results.verToken, {
                    secure: false,
                    httpOnly: false,
                    expires: today,
                    domain: 'localhost',
                    sameSite: 'None',
                    secure: true
                });

                return res.json({
                    success: 1,
                    message: "login successfully",
                    user: results.firstName,
                    token: jsontoken,
                    tokenExpiry: 10 * 60 * 1000
                });
            }

            return res.json({
                success: 0,
                message: "Email o clave errónea"
            });
        });
    },
    refreshToken: (req, res) => {
        console.log(req.cookies)
        console.log(req.cookies.refreshToken)

        if (!req.cookies || !req.cookies.refreshToken) {
            console.log('no cookie')
            return res.status(401).json({
                success: 0,
                message: "no token"
            });
        }

        getUserByRefreshToken(req.cookies.refreshToken, req.cookies.verToken, (err, results) => {
            if (err) {
                console.log(err);
            }

            if (!results) {
                res.cookie("refreshToken", '', {
                    secure: false,
                    httpOnly: true,
                    domain: 'localhost',
                    sameSite: 'None',
                    secure: true
                });
                
                return res.json({
                    success: 0,
                    data: "Email o clave errónea"
                });
            }

            const jsontoken = sign({
                lastName: results.lastName,
                firstName: results.firstName,
                role: results.role
            }, "definedKeyInEnv", {
                expiresIn: "10m"
            });

            return res.json({
                success: 1,
                message: "updated successfully",
                user: results.firstName,
                token: jsontoken,
                tokenExpiry: 10 * 60 * 1000
            });
        });
    },
    logout: (req, res) => {
        if (!req.cookies || !req.cookies.refreshToken) {
            return res.json({
                success: 1,
                message: "logged out",
            });
        }

        res.cookie("refreshToken", '', {
            secure: false,
            httpOnly: true,
            domain: 'localhost',
            sameSite: 'None',
            secure: true
        });

        return res.status(200).json({
            success: 1,
            message: "logout successful"
        });
    },
};
