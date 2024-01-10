const User = require('../models/user');

const isUserController = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    return res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = isUserController;
