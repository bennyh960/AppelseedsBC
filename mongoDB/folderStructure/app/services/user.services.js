import { User } from '../models/user/user.model.js';

export const addUser = async (user) => {
  const newUser = new User(user); // new user === instance
  User.findSomethingNew();
  newUser.instanceMethod();
  return await newUser.save();
};
