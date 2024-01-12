import { ChangeEvent } from 'react';

interface TextareaProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  value?: string;
}

const Textarea = ({ onChange, placeholder, value }: TextareaProps) => {
  return (
    <textarea
      className="w-full h-[100px] resize-none bg-black text-white dark:bg-white dark:text-black focus:outline-purple-500"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Textarea;
