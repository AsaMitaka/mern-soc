import { Outlet } from 'react-router-dom';
import { RightBar } from '.';

const HomeLayout = () => {
  return (
    <div className="flex">
      <div className="md:w-2/3 mx-auto md:px-0 px-2">
        <Outlet />
      </div>
      <div className="md:block md:w-1/3 hidden">
        <RightBar />
      </div>
    </div>
  );
};

export default HomeLayout;
