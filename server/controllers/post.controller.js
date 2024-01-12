const Post = require('../models/post');
const User = require('../models/user');

const createPost = async (req, res) => {
  const { text } = req.body;
  const userId = req.userId;

  try {
    if (!text) {
      return res.status(403).json({ msg: 'Title or text is empty' });
    }

    if (text.length < 1 || text.length > 255) {
      return res.status(403).json({ msg: 'Text length more than 1 or less than 255' });
    }

    const post = Post({
      text,
      authorId: userId,
    });

    await post.save();
    const user = await User.findById(userId);
    user.posts.push(post._id);
    await user.save();

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ msg: 'Error creating post' });
  }
};

const editPost = async (req, res) => {
  const { text } = req.body;
  const { postId } = req.params;

  try {
    const post = await Post.findOneAndUpdate({ _id: postId }, { text }, { new: true });

    if (!post) {
      return res.status(403).json({ msg: 'Post is not found' });
    }

    return res.status(200).json({ msg: 'Post updated' });
  } catch (err) {
    return res.status(500).json({ msg: 'Error updating post' });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    await Post.findByIdAndDelete(id);

    await Comment.deleteMany({ postId: id });

    const user = await User.findById(userId);
    user.posts = user.posts.filter((item) => item.id !== id);
    await user.save();

    return res.status(200).json({ msg: 'Post is deleted successfully' });
  } catch (err) {
    return res.status(500).json({ msg: 'Error deleting post' });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id)
      .populate('authorId')
      .populate({ path: 'comments', populate: { path: 'authorId', model: 'User' } });

    if (!post) {
      return res.status(403).json({ msg: 'Post is not found' });
    }

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('authorId')
      .populate({ path: 'comments', populate: { path: 'authorId', model: 'User' } });

    if (!posts) {
      return res.status(403).json({ msg: 'Post is not found' });
    }

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getUserPosts = async (req, res) => {
  const { userId } = req.params;

  try {
    const posts = await Post.find({
      authorId: userId,
    })
      .sort({ createdAt: -1 })
      .populate('authorId');

    if (!posts || posts.length === 0) {
      return res.status(403).json({ msg: 'No posts found for this user' });
    }

    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('authorId');

    if (!posts) {
      return res.status(403).json({ msg: 'Error' });
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ msg: 'Error getting all posts' });
  }
};

module.exports = {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
  getAllPosts,
  getUserPosts,
};
