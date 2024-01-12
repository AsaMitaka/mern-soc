import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Btn, Textarea } from '.';
import pic from '../assets/login.jpg';
import axios from '../libs/axios';

const NewPost = () => {
  const [text, setText] = useState('');

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (text.length < 1 || text.length > 255) {
      console.error('Text must be more than 1 or less 255 characters');
      return;
    }

    try {
      const post = await axios.post('/post', {
        text,
      });

      if (!post) {
        console.error('Something went wrong');
      }

      setText('');
      toast.success('Post successfully');
    } catch (error) {
      console.warn(error);
      toast.error('Post failed');
    }
  };

  return (
    <form className="flex flex-col px-5 pb-2 border-b-[1px]" onSubmit={handleSumbit}>
      <div className="flex items-center">
        <Link to="/profile/1" className="self-start mr-2 hover:opacity-80">
          <img src={pic} className="w-10 h-10" />
        </Link>
        <Textarea onChange={(e) => setText(e.target.value)} placeholder="New Post" value={text} />
      </div>
      <div className="flex justify-end">
        <Btn title="New Post" type="submit" />
      </div>
    </form>
  );
};

export default NewPost;
