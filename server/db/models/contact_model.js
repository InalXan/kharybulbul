import {model, Schema} from "mongoose";

const ContactSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const Contact = model("Contact", ContactSchema);
export default Contact;
