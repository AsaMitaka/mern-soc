import Btn from './ui/button';
import Input from './ui/input';
import pic from '../assets/login.jpg';
import { Link } from 'react-router-dom';

const NewPost = () => {
  return (
    <div className="flex flex-col px-5 py-2 border-b-[1px]">
      <div className="flex items-center">
        <Link to="/profile/1" className="hover:opacity-80">
          <img src={pic} className="w-10 h-10 mr-2" />
        </Link>
        <Input isBig isOutline placeholder="New Post" />
      </div>
      <div className="flex justify-end">
        <Btn title="New Post" />
      </div>
    </div>
  );
};

export default NewPost;
