import {model, Schema} from "mongoose";

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = model("User", UserSchema);
export default User;
