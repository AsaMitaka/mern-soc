import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  isLarge?: boolean;
} & ComponentProps<'button'>;

const BUTTON_STYLES = stylex.create({
  base: {
    border: '1px solid black',
    background: 'none',
    padding: '4px 10px',
    fontSize: '18px',
    borderRadius: '.25em',
    cursor: 'pointer',
  },
  primary: {
    color: 'white',
    backgroundColor: {
      default: 'blue',
      ':hover': '#316FF6',
    },
  },
  secondary: {
    color: 'black',
    backgroundColor: 'white',
    opacity: {
      default: 1,
      ':hover': '.6',
    },
  },
  isLarge: {
    padding: '5px 20px',
    fontSize: '24px',
  },
});

const Button = ({ variant = 'primary', isLarge = false, ...props }: ButtonProps) => {
  return (
    <button
      {...stylex.props(
        BUTTON_STYLES.base,
        BUTTON_STYLES[variant],
        isLarge && BUTTON_STYLES.isLarge,
      )}
      {...props}
    />
  );
};

export default Button;
