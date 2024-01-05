const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!(password && email)) {
      return res.status(403).json({ msg: 'Username or password or email or name is empty' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ msg: 'User is not registered' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(403).json({ msg: 'Email or password is invalid' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...otherData } = user._doc;

    return res.status(200).json({ token, ...otherData });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = loginController;
