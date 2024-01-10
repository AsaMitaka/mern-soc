import type { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  isBig?: boolean;
  isOutline?: boolean;
  isRounded?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  value?: string;
}

const Input = ({
  isBig,
  isOutline,
  isRounded,
  onChange,
  onKeyDown,
  placeholder,
  type = 'text',
  value,
}: InputProps) => {
  return (
    <input
      className={`
      ${isBig ? 'w-full text-xl px-4 py-2' : 'w-fit text-md px-2 py-1'}
      ${
        isOutline
          ? 'border-black border-1 bg-white text-black focus:outline-purple-500'
          : 'bg-black text-white dark:bg-white dark:text-black'
      }
      ${isRounded ? 'rounded-md' : ''}
      my-[5px] 
      focus:opacity-65
      hover:opacity-65
      `}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default Input;
