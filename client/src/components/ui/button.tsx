interface ButtonProps {
  isBig?: boolean;
  isPrimary?: boolean;
  isRounded?: boolean;
  title: string;
}

const Btn = ({ isBig, isPrimary, isRounded, title }: ButtonProps) => {
  return (
    <button
      className={`
      my-2
      ${isBig ? 'px-6 py-2 text-lg border-2' : 'px-4 py-2 text-md border-[1px]'}
      ${isRounded ? 'rounded-md' : ''}
      ${isPrimary ? 'bg-black text-white border-black' : 'border-purple-500 text-black bg-white'}
      font-bold
      hover:opacity-60
    `}>
      {title}
    </button>
  );
};

export default Btn;
