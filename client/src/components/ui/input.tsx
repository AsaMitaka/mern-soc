interface InputProps {
  isBig?: boolean;
  isOutline?: boolean;
  isRounded?: boolean;
  placeholder: string;
  type?: string;
}

const Input = ({ isBig, isOutline, isRounded, placeholder, type = 'text' }: InputProps) => {
  return (
    <input
      className={`
      ${isBig ? 'w-full text-xl px-4 py-2' : 'w-fit text-md px-2 py-1'}
      ${
        isOutline
          ? 'border-black border-1 bg-white text-black focus:outline-purple-500'
          : 'bg-black text-white'
      }
      ${isRounded ? 'rounded-md' : ''}
      my-[5px] 
      focus:opacity-65
      hover:opacity-65
      `}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
