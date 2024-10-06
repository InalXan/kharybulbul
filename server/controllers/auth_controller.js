import User from "../db/models/auth_model.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyODA2NTI5MywiaWF0IjoxNzI4MDY1MjkzfQ.Tsptqkynv9c3hCiOAFxDMIJaQXLDO6jvdAO-Qzu6YiM";


const register =async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      number: req.body.number,
      password: hashedPassword
    });
    
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
const login = async (req, res) => {
  try {
    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'secret');
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
export {login, register};

