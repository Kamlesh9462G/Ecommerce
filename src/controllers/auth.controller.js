const { userService, tokenService } = require('../services');
const ApiError = require('../utils/ApiError');
const signupUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body)
        const tokens = await tokenService.generateAuthTokens(user);
        res.send({ message: 'Signup successful', data: tokens });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userService.loginUser(email, password)
        const tokens = await tokenService.generateAuthTokens(user);
        res.send({ message: 'Login successful', data: tokens });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    signupUser,
    loginUser,
}