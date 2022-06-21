import mongoose from 'mongoose';
import { userSchema } from './user.schema.js';

userSchema.statics.findSomethingNew = function () {
  console.log({ findSomethingNewThisFunc: this });
};

userSchema.methods.instanceMethod = function () {
  console.log({ InstanceMethodsThis: this });
};

const User = mongoose.model('users', userSchema);

export { User };
