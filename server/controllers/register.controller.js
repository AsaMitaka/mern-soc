const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const registerController = async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    if (!(username && password && name && email)) {
      return res.status(403).json({ msg: 'Username or password or email or name is empty' });
    }

    if (username.length < 3 || username.length > 250) {
      return res
        .status(403)
        .json({ msg: 'Username cant be less than 3 characters or more 250 characters' });
    }

    if (password.length < 5 || password.length > 15) {
      return res.status(403).json({ message: 'Password is too long or too short' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    const { password: pass, ...otherData } = user._doc;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    return res.status(200).json({ token, ...otherData });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = registerController;
