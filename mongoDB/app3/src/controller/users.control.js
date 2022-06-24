const User = require("../db/model/users.model.js");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const token = await newUser.generateAuthToken();
    await newUser.save();
    res.status(201).send({ newUser, token });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(User, req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const editUser = async (req, res) => {
  const updatedProperties = Object.keys(req.body);
  const userSchemaObj = Object.keys(User.schema.obj);
  const isValidPropertyToUpdate = updatedProperties.every((key) => userSchemaObj.includes(key));

  if (!isValidPropertyToUpdate) {
    console.log("Error: invalid property update.");
    return res.status(400).send(`Error : Invalid Update (property issue) check ${updatedProperties}`);
  }

  try {
    //  This function under comment due to we want to run middelware before save and in this methode save is heppend auto
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    const user = await User.findById(req.params.id);
    updatedProperties.forEach((key) => (user[key] = req.body[key]));
    await user.save();

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getUsers, createUser, loginUser, editUser };
