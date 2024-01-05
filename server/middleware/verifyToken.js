const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (!token) {
      return res.status(403).json({ msg: 'Invalid authorization' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(403).json({ msg: 'Error verifying token' });
    }

    req.userId = decodedToken._id;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = verifyToken;
