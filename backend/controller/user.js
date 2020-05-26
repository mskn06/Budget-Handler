const User = require("../models/user");

const getUserInfo = async (req, res) => {
  const user = await User.find();
  if (user) res.send({ user: user });
  else res.send({ error: "No users found" });
};

const postUser = async (req, res) => {
  const user = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  };

  try {
    //checks if info is provided
    if (!user.email) res.send({ error: "e-mail should be provided!" });
    else {
      //checks if the user already exists
      const existingUser = await User.findOne({
        email: user.email,
      });

      if (!existingUser) {
        //creates new user
        const newUser = new User(user);
        const savedUser = await newUser.save();
        res.status(201).send({ user: savedUser });
      } else {
        res.send({ error: "User Already exists!" });
      }
    }
  } catch (err) {
    res.send({ error: err });
  }
};

const updateUser = (req, res) => {
  try {
    //checks if info is provided

    User.findOneAndUpdate(
      { email: req.body.email },
      {
        $set: {
          clearanceTime: req.body.clearanceTime,
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
        },
      },
      { new: true },
      (err, doc) => {
        if (err) console.log({ err: err });
        else res.send({ user: doc });
        // else console.log({ doc: doc });
      }
    );
  } catch (err) {
    res.send({ error: err });
  }
};
exports.getUserInfo = getUserInfo;
exports.postUser = postUser;
exports.updateUser = updateUser;
