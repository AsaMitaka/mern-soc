import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-2xl font-bold">404</h1>
      <h2 className="text-xl font-semibold">Page not found</h2>
      <Link className="text-xl underline hover:opacity-80" to={'/'}>
        Main
      </Link>
    </div>
  );
};

export default Error;
