import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import pic from '../assets/login.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Post = () => {
  const isUser = useSelector<RootState>((state) => state.auth.user._id);
  const [isLiked, setLiked] = useState<boolean>(true);
  const Heart = isLiked ? IoHeartSharp : IoHeartOutline;

  const handleLike = (e) => {
    e.preventDefault();

    setLiked((prev) => !prev);
    console.log('handleLike');
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <Link
      className="flex flex-col px-5 py-3 border-b-[1px] text-black dark:text-white"
      to="/post/1">
      <Link to="/profile/2" className="flex flex-row items-center group">
        <img src={pic} alt="userpic" className="w-6 h-6 mr-2 group-hover:opacity-80" />
        <p className="text-lg font-semibold mr-2 group-hover:underline">Username</p>
        <p className="text-light mr-2">@name</p>
        <p className="text-light">Data</p>
      </Link>
      <div className="mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore beatae atque consectetur?
        Necessitatibus officiis explicabo odio nisi recusandae, exercitationem a nostrum quasi
        voluptas earum magnam nobis porro iure modi impedit?
      </div>
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
          <span className="text-md mr-1">2</span>
        </div>
      </div>
    </Link>
  );
};

export default Post;
