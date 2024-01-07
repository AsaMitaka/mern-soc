import Btn from '../components/ui/button';
import pic from '../assets/login.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <div className="border-black border-[1px] flex justify-center items-center">
        <img src={pic} alt="profile pic" className="w-40 h-40 border-[3px] border-black" />
      </div>
      <div className="w-full col-span-2 flex flex-col items-center border-black border-[1px] px-4 py-4">
        <h1 className="text-black text-2xl font-bold">ABOUT</h1>
        <div className="mt-2 border-purple-500 border-[1px] px-3 py-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex similique sunt
          blanditiis vitae, dicta laudantium autem illum nisi accusantium provident harum velit
          eligendi soluta, magni sed maiores ratione repellat.
        </div>
        <Btn title="Rewrite" />
      </div>
      <div className="border-black border-[1px] flex flex-col px-5 py-5 justify-center">
        <p className="text-xl font-bold">Username</p>
        <p className="text-xl font-bold">Name</p>
        <p className="text-xl font-bold">Info</p>
      </div>
      <div className="col-span-2 row-span-2 border-black border-[1px] flex flex-col px-5 py-2">
        <h1 className="mx-2 text-2xl font-bold self-center">Posts</h1>
        <div className="flex flex-col items-start">
          <Link
            to="/post/1"
            className="my-1 text-xl font-bold text-purple-500 hover:opacity-50 uppercase">
            Name 1
          </Link>
          <Link
            to="/post/2"
            className="my-1 text-xl font-bold text-purple-500 hover:opacity-50 uppercase">
            Name 1
          </Link>
          <Link
            to="/post/3"
            className="my-1 text-xl font-bold text-purple-500 hover:opacity-50 uppercase">
            Name 1
          </Link>
          <Link
            to="/post/4"
            className="my-1 text-xl font-bold text-purple-500 hover:opacity-50 uppercase">
            Name 1
          </Link>
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 items-center justify-center border-black border-[1px]">
        <Btn isBig isPrimary title="Delete" />
        <Btn isBig title="Block" />
      </div>
    </div>
  );
};

export default Profile;
