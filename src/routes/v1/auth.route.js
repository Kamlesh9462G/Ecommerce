const express = require('express');
const authController = require('../../controllers/auth.controller')
const authValidations = require('../../validations/auth.validation')
const validate = require('../../middlewares/validate')

const router = express()

router.
    route('/signup')
    .post(
        validate(authValidations.signup),
        authController.signupUser
    )

router.
    route('/signin')
    .post(
        validate(authValidations.signin),
        authController.loginUser
    )
module.exports = router;