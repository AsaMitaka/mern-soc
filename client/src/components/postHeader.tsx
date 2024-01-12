import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { RootState } from '../store/store';
import { PostProps } from '../libs/types';
import pic from '../assets/login.jpg';
import { IoIosClose } from 'react-icons/io';
import axios from '../libs/axios';
import { toast } from 'react-toastify';

const PostHeader = ({ text, id, authorId, comments, data }: PostProps) => {
  const isUser = useSelector<RootState>((state) => state.auth.user?._id);
  const postData = dayjs(data).format('HH:mm · DD MM YY');
  const [isLiked, setLiked] = useState<boolean>(true);
  const Heart = isLiked ? IoHeartSharp : IoHeartOutline;
  const navigate = useNavigate();

  const handleLike = (e) => {
    e.preventDefault();

    setLiked((prev) => !prev);
    console.log('handleLike');
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const deleteComment = await axios.delete(`/post/${id}`);

      if (!deleteComment) {
        toast.error('Not deleted');
      }

      toast.success('Comment deleted successfully');
      return navigate('/');
    } catch (error) {
      console.log(error);
    }

    console.log('Clicked');
  };

  return (
    <div className="flex flex-col px-5 py-3 border-b-[1px] text-black dark:text-white">
      <div className="flex justify-between">
        <Link to={`/profile/${authorId._id}`} className="flex flex-row items-center group">
          <img src={pic} alt="userpic" className="w-6 h-6 mr-2 group-hover:opacity-80" />
          <p className="text-lg font-semibold mr-2 group-hover:underline">{authorId.username}</p>
          <p className="text-light mr-2">@{authorId.name}</p>
        </Link>
        <div className="cursor-pointer hover:opacity-50" onClick={handleDelete}>
          {isUser === authorId._id && (
            <div onClick={handleDelete}>
              <IoIosClose size={24} color="black dark:white" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 text-lg">{text}</div>
      <div className="mt-1 text-light text-sm text-gray-500">{postData}</div>
      <div className="mt-2 flex flex-row items-center">
        <div className="flex flex-row items-center group mr-5" onClick={handleLike}>
          <AiOutlineRetweet
            className="mr-2 group-hover:opacity-70 text-black dark:text-white"
            size={24}
          />
          <span className="text-md mr-1">2</span>
        </div>
        <div className="flex flex-row items-center group mr-5" onClick={handleLike}>
          <Heart color={isLiked ? 'red' : ''} className="mr-2 group-hover:opacity-70" size={24} />
          <span className="text-md mr-1">2</span>
        </div>
        <div className="flex flex-row items-center group mr-5" onClick={handleLike}>
          <FiMessageCircle
            className="mr-2 text-black dark:text-white group-hover:opacity-70"
            size={24}
          />
          <span className="text-md mr-1">{comments?.length > 0 ? comments.length : 0}</span>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
