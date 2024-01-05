const Comment = require('../models/comment');
const Post = require('../models/post');

const createComment = async (req, res) => {
  const { text, postId } = req.body;
  const userId = req.userId;

  try {
    if (text.length < 1 || text.length > 300) {
      return res.status(403).json({ msg: 'Text must be more than 1 or less 300 characters' });
    }

    const comment = new Comment({
      authorId: userId,
      postId,
      text,
    });

    await comment.save();
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(403).json({ msg: 'Post is not found' });
    }
    post.comments.push(comment._id);
    await post.save();

    return res.status(200).json({ msg: 'Comment created' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteComment = async (req, res) => {
  const id = req.params.commentId;

  try {
    const comment = await Comment.findOneAndRemove(id);

    if (!comment) {
      return res.status(403).json({ msg: 'Comment is not deleted' });
    }

    const post = await Post.findById(comment.postId);
    if (post) {
      post.comments = post.comments.filter((commentId) => commentId.toString() !== id);
      await post.save();
    }

    return res.status(200).json({ msg: 'Comment is deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createComment, deleteComment };
