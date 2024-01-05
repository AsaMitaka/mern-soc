import { NavLink } from 'react-router-dom';

const Header = () => {
  const items = [
    { title: 'Main', href: '/' },
    { title: 'About', href: '/about' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {items.map((item) => (
            <li>
              <NavLink
                to={item.href}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isActive ? 'red' : 'black',
                  };
                }}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
