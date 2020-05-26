var router = require("express").Router();

const {getUserInfo} = require ("../controller/user")

router.get("/", getUserInfo)

module.exports = router