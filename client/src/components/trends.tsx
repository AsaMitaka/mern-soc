import { Link } from 'react-router-dom';

const Trends = () => {
  return (
    <div className="mx-3 flex flex-col mt-2 bg-gray-200 px-4 rounded-xl">
      <h1 className="my-2 text-2xl font-bold">Trends</h1>
      <Link className="text-xl py-2 group" to="/search?q=text">
        <div className="text-xl font-semibold group-hover:text-purple-500">Text</div>
      </Link>
    </div>
  );
};

export default Trends;
