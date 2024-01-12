import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../libs/axios';
import { Btn, Comment, Input, PostHeader } from '../components';
import { toast } from 'react-toastify';
// import { PostProps } from '../libs/types';

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const getPostData = await axios.get(`/post/${id}`);

        console.log(getPostData.data);
        setPostData(getPostData.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleComment = async (e) => {
    e.preventDefault();
    if (text.length < 1 || text.length > 255) {
      toast.error('Message must be more 1 and less 255 characters');
      return;
    }

    try {
      const posted = await axios.post('/comment', {
        text,
        postId: id,
      });

      if (!posted) {
        toast.error('Error posting');
      }

      setText('');
      toast.success('Comment created');
    } catch (error) {
      toast.error('Error with posting comment');
    }
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <div className="self-center">
          <h1 className="text-xl font-bold">Loading</h1>
        </div>
      ) : (
        postData && (
          <>
            <PostHeader
              id={postData?._id}
              key={postData?._id}
              authorId={postData?.authorId}
              comments={postData?.comments}
              data={postData?.createdAt}
              text={postData?.text}
            />
            <form className="flex items-center px-5 py-2" onSubmit={handleComment}>
              <Input
                onChange={(e) => setText(e.target.value)}
                isBig
                isOutline
                placeholder="Comment"
                value={text}
              />
              <div className="ml-3">
                <Btn title="Send" type="submit" />
              </div>
            </form>
            {postData?.comments.length > 0 ? (
              postData?.comments.map((comment) => (
                <Comment
                  key={comment._id}
                  id={comment._id}
                  authorId={comment.authorId}
                  data={comment.createdAt}
                  text={comment.text}
                />
              ))
            ) : (
              <div className="mt-2 self-center">No Comments</div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Post;
