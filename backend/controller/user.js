const User = require("../models/user");


const getUserInfo = (req, res)=>{
    res.send("hello!");
}


exports.getUserInfo = getUserInfo;