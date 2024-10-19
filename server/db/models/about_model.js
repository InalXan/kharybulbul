import {model, Schema} from "mongoose";

const aboutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    aboutImage: {
        type: Buffer,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const About = model("About", aboutSchema);

export default About;