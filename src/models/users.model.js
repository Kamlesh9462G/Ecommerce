const mongoose = require('mongoose');
var crypto = require("crypto")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    cart: [
        {
            product:
            {
                type: Schema.Types.ObjectId,
                require: true
            },
            quantity: {
                type: Number, require: true
            }
        }
    ],
},
    {
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {
    const user = this
    if (user.isModified("password")) {
        user.password = crypto
            .createHash("sha256")
            .update(user.password)
            .digest("hex")
    }
    next()
})
module.exports = mongoose.model('users', userSchema);