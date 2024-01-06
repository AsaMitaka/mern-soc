import { NavLink } from 'react-router-dom';
import * as stylex from '@stylexjs/stylex';

const HEADER_STYLES = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
});

const Header = () => {
  const items = [
    { title: 'Main', href: '/' },
    { title: 'About', href: '/about' },
  ];

  return (
    <header {...stylex.props(HEADER_STYLES.base)}>
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
