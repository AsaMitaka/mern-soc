import Post from '../components/post';
import Trends from '../components/trends';

const Home = () => {
  return (
    <div className="flex min-h-svh">
      <div className="w-2/3 border-l-[1px] border-r-[1px]">
        <Post />
      </div>
      <div className="w-1/3">
        <Trends />
      </div>
    </div>
  );
};

export default Home;
