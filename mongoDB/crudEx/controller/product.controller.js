// import { addUser } from '../services/user.services.js';

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const savedUser = addUser(user); //Mongoose
    res.send(savedUser);
  } catch (error) {
    res.send(error.message);
  }
};
