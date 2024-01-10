import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../libs/axios';
import pic from '../assets/login.jpg';
import Post from '../components/post';
import { Trends } from '../components';
import Btn from '../components/ui/button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setLogout } from '../store/slices/auth';
import { UserProps } from '../libs/types';

const ProfilePosts = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [data, setData] = useState<null | UserProps>();

  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(setLogout());
    return navigate('/');
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await axios.get(`/user/${id}`);

        setData(userData.data.user);
        console.log(userData.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="mt-3 flex mx-auto md:px-0 px-2 md:flex-row flex-col min-h-svh">
      <div className="md:w-1/5 flex md:flex-col flex-row md:justify-start justify-between text-black dark:text-white">
        <div className="">
          <img src={pic} alt="user pic" className="w-36 h-36 border-white border-3" />
        </div>
        <div>
          <h1 className="text-lg font-bold">{data?.username}</h1>
          <h3>@{data?.name}</h3>
          <h4 className="font-light">Joined {data?.createdAt}</h4>
          {/* <div className="cursor-pointer hover:text-purple-200 hover:underline">
          <span className="text-lg mr-1">23</span>Following
        </div>
        <div className="cursor-pointer hover:text-purple-200 hover:underline">
          <span className="text-lg mr-1">23</span>Followers
        </div> */}
          <p>
            <Btn onClick={handleLogOut} title="Sign Out" type="button" />
          </p>
        </div>
      </div>
      <div className="md:w-4/5 md:mt-0 mt-2 flex flex-col border-l-[1px] border-r-[1px]">
        <div className="w-full flex flex-row items-center justify-between px-2 bg-white border-[1px]">
          <div className="flex items-center">
            <Link
              className="mr-2 px-3 font-bold text-lg text-purple-500 hover:underline"
              to={`/profile/${data?._id}`}>
              Posts
            </Link>
            <Link
              className="px-3 font-bold text-lg text-purple-500 hover:underline"
              to={`/profile/${data?._id}/likes`}>
              Likes
            </Link>
          </div>
          <div className="">
            <Btn title="Follow" />
          </div>
        </div>
        <div className="">
          <Post />
        </div>
      </div>
      <div className="md:w-1/5 md:block hidden">
        <Trends />
      </div>
    </div>
  );
};

export default ProfilePosts;
