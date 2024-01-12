import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { CiDark, CiLight } from 'react-icons/ci';
import { IoMdHome, IoIosSearch } from 'react-icons/io';
import { AppDispatch, RootState } from '../store/store';
import { setMode } from '../store/slices/mode';

const Header = () => {
  const items = [
    { title: 'Main', href: '/', icon: IoMdHome },
    { title: 'Search', href: '/search', icon: IoIosSearch },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector<RootState>((state) => state.mode.mode);
  const ModeIcon = isDark ? CiLight : CiDark;
  const userId = useSelector<RootState>((state) => state.auth.user?._id);

  const handleDarkMode = () => {
    dispatch(setMode());
  };

  return (
    <header className="sticky w-full top-0 left-0 right-0 px-2 md:px-10 py-3 bg-black dark:bg-white">
      <nav className="flex justify-between">
        <ul className="flex flex-row items-center">
          {items.map((item, index) => (
            <li
              key={`${index}__${item.title}`}
              className="mr-2 text-2xl font-light cursor-pointer hover:opacity-50">
              <Link to={item.href} className="text-white dark:text-black">
                <item.icon color="white" size={28} className="flex md:hidden" />
                <span className="hidden md:flex">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center">
          <li
            className="mr-4 px-2 py-1.5 bg-white dark:bg-black rounded-md cursor-pointer hover:opacity-50"
            onClick={handleDarkMode}>
            <ModeIcon color={isDark ? 'white' : 'black'} size={24} />
          </li>
          <li
            className="text-2xl font-light hover:opacity-50
          ">
            <Link
              to={`/profile/${userId}`}
              className="text-white dark:text-black flex items-center">
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
