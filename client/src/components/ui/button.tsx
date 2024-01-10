import type { ButtonHTMLAttributes, MouseEvent } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isBig?: boolean;
  isPrimary?: boolean;
  isRounded?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  type?: 'button' | 'submit';
}

const Btn = ({ isBig, isPrimary, isRounded, onClick, type = 'button', title }: ButtonProps) => {
  return (
    <button
      className={`
      my-2
      ${isBig ? 'px-6 py-2 text-lg border-2 w-full' : 'w-fit px-4 py-2 text-md border-[1px]'}
      ${isRounded ? 'rounded-md' : ''}
      ${isPrimary ? 'bg-black text-white border-black' : 'border-purple-500 text-black bg-white'}
      font-bold
      hover:opacity-60
    `}
      onClick={onClick}
      type={type}>
      {title}
    </button>
  );
};

export default Btn;
