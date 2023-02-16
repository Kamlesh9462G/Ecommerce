const tokenTypes = require('../config/token')
const moment = require('moment')
var jwt = require('jsonwebtoken');

const generateToken = (user, expires, type, secret = process.env.JWT_SECRET) => {
    const payload = {
        _id: user.id,
        iat: moment().unix(),
        exp: expires.unix(),
        type,
    };
    return jwt.sign(payload, secret);
};
const generateAuthTokens = async (user) => {
    const accessTokenExpires = moment().add(
        process.env.JWT_ACCESS_EXPIRATION_MINUTES,
        "minutes"
    );
    const accessToken = generateToken(
        user,
        accessTokenExpires,
        tokenTypes.ACCESS
    );
    const refreshTokenExpires = moment().add(
        process.env.JWT_REFRESH_EXPIRATION_DAYS,
        "days"
    );
    const refreshToken = generateToken(
        user,
        refreshTokenExpires,
        tokenTypes.REFRESH
    );
    return {
        access: {
            token: accessToken,
            expires: accessTokenExpires.toDate(),
        },
        refresh: {
            token: refreshToken,
            expires: refreshTokenExpires.toDate(),
        },
    }
}
module.exports = {
    generateAuthTokens
}