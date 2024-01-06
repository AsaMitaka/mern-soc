import { Link } from 'react-router-dom';

const Header = () => {
  const items = [
    { title: 'Main', href: '/' },
    { title: 'About', href: '/about' },
  ];

  return (
    <header className="sticky w-full top-0 left-0 right-0 px-3 py-2 bg-black">
      <nav className="flex justify-between">
        <ul className="flex flex-row items-center">
          {items.map((item) => (
            <li className="mr-2 text-lg font-bold cursor-pointer hover:opacity-50">
              <Link to={item.href} className="text-white">
                <span className="hidden md:flex">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li
            className="text-lg font-bold hover:opacity-50
          ">
            <Link to={'/profile'} className="text-white">
              <span className="hidden md:flex">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
