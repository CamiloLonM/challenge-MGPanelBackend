import { Schema, model } from 'mongoose';

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    require: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Password is required'],
  },
  rol: {
    type: String,
    require: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { _v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

export default model('User', UserSchema);
