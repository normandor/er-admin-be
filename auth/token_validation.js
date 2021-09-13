const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");

        if (!token) {
                return res.status(401).json({
                    success: 0,
                    message: "access denied"
            })
        }

        token = token.slice(7);

        verify(token, "definedKeyInEnv", (err, decoded) => {
            if (err) {
                return res.json({
                   success: 0,
                   message: "invalid token" 
                });
            }

            next();
        });
    }
}