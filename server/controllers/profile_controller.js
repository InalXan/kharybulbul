import User from "../db/models/auth_model.js";
const profile = async (req, res) => {
  try {
    // Fetch user details using decoded token
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ fullname: user.fullname, email: user.email, number: user.number });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default profile;
