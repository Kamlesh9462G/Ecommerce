const { userService, tokenService } = require('../services');
const ApiError = require('../utils/ApiError');
const createUser = async (req, res, next) => {
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
const updateUser = async (req, res, next) => {
    try {

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
const getUser = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const user = await userService.getUserById(_id)
        if (!user) {
            throw new ApiError(400, "user not found")
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
module.exports = {
    createUser,
    updateUser,
    getUser
}