import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';

type InputProps = {
  variant?: 'primary' | 'secondary';
  isLarge?: boolean;
} & ComponentProps<'input'>;

const INPUT_STYLES = stylex.create({
  base: {
    fontSize: '22px',
    border: '1px solid transparent',
    padding: '5px 10px',
    borderRadius: '15px',
    width: 'auto',
    maxWidth: '200px',
  },
  primary: {
    backgroundColor: 'white',
    color: 'black',
  },
  secondary: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid black',
  },
  isLarge: {
    width: '100%',
    maxWidth: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '24px',
  },
});

const Input = ({ variant = 'primary', isLarge = false, ...props }: InputProps) => {
  return (
    <input
      {...stylex.props(INPUT_STYLES.base, INPUT_STYLES[variant], isLarge && INPUT_STYLES.isLarge)}
      type="text"
      {...props}
    />
  );
};

export default Input;
