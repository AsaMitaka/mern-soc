import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import pic from '../assets/login.jpg';
import axios from '../libs/axios';
import { RootState } from '../store/store';
import { UserProps } from '../libs/types';
import { IoIosClose } from 'react-icons/io';

interface CommentProps {
  authorId: UserProps;
  id: string;
  data: string;
  text: string;
}

const Comment = ({ authorId, data, id, text }: CommentProps) => {
  const isUser = useSelector<RootState>((state) => state.auth.user?._id);
  const postData = dayjs(data).format('HH:mm:ss');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const deleteComment = await axios.delete(`/comment/${id}`);

      if (!deleteComment) {
        toast.error('Not deleted');
        return;
      }

      toast.success('Comment deleted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col px-5 py-3 border-b-[1px] text-black dark:text-white">
      <div className="flex justify-between">
        <Link to={`/profile/${authorId._id}`} className="flex flex-row items-center group">
          <img src={pic} alt="userpic" className="w-6 h-6 mr-2 group-hover:opacity-80" />
          <p className="text-lg font-semibold mr-2 group-hover:underline">{authorId.username}</p>
          <p className="text-light mr-2">@{authorId.name}</p>
          <p className="text-light text-xs text-gray-500">{postData}</p>
        </Link>
        <div className="hover:opacity-50" onClick={handleDelete}>
          {isUser === authorId._id && (
            <div onClick={handleDelete}>
              <IoIosClose size={24} color="black dark:white" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-2">{text}</div>
    </div>
  );
};

export default Comment;
