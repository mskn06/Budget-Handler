var router = require("express").Router();

const {getUserInfo, postUser, updateUser} = require ("../controller/user")

// GET: all users
router.get("/", getUserInfo)

// POST: add user
router.post("/", postUser);

// PUT: update user
router.put("/", updateUser);

module.exports = router