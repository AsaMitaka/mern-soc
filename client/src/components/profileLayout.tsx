import pic from '../assets/login.jpg';
import { Link, Outlet } from 'react-router-dom';
import Btn from './ui/button';

const ProfileLayout = () => {
  return (
    <div className="mt-3 flex min-h-svh">
      <div className="w-1/5 flex flex-col">
        <img src={pic} alt="user pic" className="w-36 h-36 border-white border-3" />
        <h1 className="text-lg font-bold">Username</h1>
        <h3>@name</h3>
        <h4 className="font-light">Joined March 2006</h4>
        <div className="cursor-pointer hover:text-purple-200 hover:underline">
          <span className="text-lg mr-1">23</span>Following
        </div>
        <div className="cursor-pointer hover:text-purple-200 hover:underline">
          <span className="text-lg mr-1">23</span>Followers
        </div>
      </div>
      <div className="w-4/5 flex flex-col border-l-[1px] border-r-[1px]">
        <div className="w-full flex flex-row items-center justify-between px-2 bg-white border-[1px]">
          <div className="flex items-center">
            <Link
              className="mr-2 px-3 font-bold text-lg text-purple-500 hover:underline"
              to={'/profile/1'}>
              Posts
            </Link>
            <Link
              className="px-3 font-bold text-lg text-purple-500 hover:underline"
              to={'/profile/1/likes'}>
              Likes
            </Link>
          </div>
          <div className="">
            <Btn title="Follow" />
          </div>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default ProfileLayout;
