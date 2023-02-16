const ApiError = require('../utils/ApiError')
const { User } = require('../models')
const crypto = require('crypto')
const createUser = async (userData) => {
    const userExist = await getUserByEmail(userData.email)
    if (userExist) {
        throw new ApiError(400, `User already exists with email ${userData.email}`)
    }
    return await User.create(userData)
}
const getUserByEmail = async (email) => {
    return await User.findOne({ email: email })
}
const getUserById = async (userId) => {
    return await User.findOne({ _id: userId })
}
const loginUser = async (email, password) => {
    const user = await getUserByEmail(email)
    const encPassword = crypto
        .createHash('sha256')
        .update(password)
        .digest('hex');
    if (
        !user ||
        encPassword !== user.password
    ) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect email or password');
    }
    return user;
}
module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    loginUser,
}