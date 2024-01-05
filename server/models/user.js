const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    username: {
      type: String,
      required: true,
      min: 4,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 24,
    },
    bio: {
      type: String,
      max: 240,
      defaultValue: '',
    },
    imageUrl: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
