const express = require('express');
const userController = require('../../controllers/user.controller')
const auth = require('../../middlewares/auth')
const validate = require('../../middlewares/validate')
const authValidations = require('../../validations/auth.validation')
const router = express();

router.
    route('/')
    .get(
        auth,
        userController.getUser

)

module.exports = router;