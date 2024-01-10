const Post = require('../models/post');
const User = require('../models/user');

const createPost = async (req, res) => {
  const { title, text } = req.body;
  const userId = req.userId;

  try {
    if (!(title && text)) {
      return res.status(403).json({ msg: 'Title or text is empty' });
    }

    if (title.length < 1 || title.length > 30) {
      return res.status(403).json({ msg: 'Title less than 1 or more than 30' });
    }

    if (text.length < 5 || text.length > 300) {
      return res.status(403).json({ msg: 'Text length less than 5 or more than 300' });
    }

    const post = Post({
      title,
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
  const { title, text } = req.body;
  const { postId } = req.params;

  try {
    const post = await Post.findOneAndUpdate({ _id: postId }, { title, text }, { new: true });

    if (!post) {
      return res.status(403).json({ msg: 'Post is not found' });
    }

    return res.status(200).json({ msg: 'Post updated' });
  } catch (err) {
    return res.status(500).json({ msg: 'Error updating post' });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;

  try {
    const post = await Post.findByIdAndDelete(postId);

    if (!post) {
      return res.status(403).json({ msg: 'Post is not found' });
    }

    const user = await User.findById(userId);
    user.posts = user.posts.filter((item) => item.id === postId);
    await user.save();

    return res.status(200).json({ msg: 'Post is deleted successfully' });
  } catch (err) {
    return res.status(500).json({ msg: 'Error deleting post' });
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findOne({
      where: {
        postId,
      },
    })
      .populate('authorId')
      .populate({ path: 'comments', populate: { path: 'authorId', model: 'User' } });

    if (!post) {
      return res.status(403).json({ msg: 'Post is not found' });
    }

    return res.status(500).json(post);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    // .populate('authorId');
    // .populate({ path: 'comments', populate: { path: 'authorId', model: 'User' } });

    if (!posts) {
      return res.status(403).json({ msg: 'Post is not found' });
    }

    return res.status(500).json(posts);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getUserPosts = async (req, res) => {
  const { userId } = req.params;

  try {
    const posts = await Post.find({
      authorId: userId,
    }).populate('authorId');

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
