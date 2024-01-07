import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoMdHome } from 'react-icons/io';
import { PiBookOpenTextBold } from 'react-icons/pi';

const Header = () => {
  const items = [
    { title: 'Main', href: '/', icon: IoMdHome },
    { title: 'About', href: '/about', icon: PiBookOpenTextBold },
  ];

  return (
    <header className="sticky w-full top-0 left-0 right-0 px-10 py-4 bg-black">
      <nav className="flex justify-between">
        <ul className="flex flex-row items-center">
          {items.map((item) => (
            <li className="mr-2 text-2xl font-light cursor-pointer hover:opacity-50">
              <Link to={item.href} className="text-white">
                <item.icon color="white" size={28} className="flex md:hidden" />
                <span className="hidden md:flex">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li
            className="text-2xl font-light hover:opacity-50
          ">
            <Link to={'/profile'} className="text-white flex items-center">
              <CgProfile color="white" size={28} className="flex md:hidden" />
              <span className="hidden md:flex">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
