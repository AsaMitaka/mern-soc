const User = require('../models/user');

const getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('posts');

    if (!user) {
      return res.status(403).json({ msg: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(403).json({ msg: 'Error' });
    }

    return res.status(200).json({ msg: 'User deleted' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateUser = async (req, res) => {
  const { ...otherData } = req.body;
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndUpdate(userId, { ...otherData }, { new: true });

    if (!user) {
      return res.status(403).json({ msg: 'User is not find' });
    }

    return res.status(200).json({ msg: 'User updated' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = { getUser, updateUser, deleteUser };
