import { Post as PostComp } from '../components';
import Btn from '../components/ui/button';
import Input from '../components/ui/input';

const Post = () => {
  return (
    <>
      <PostComp />
      <div className="flex items-center px-5 py-2">
        <Input isBig isOutline placeholder="Comment" />
        <div className="ml-3">
          <Btn title="Send" />
        </div>
      </div>
      <PostComp />
      <PostComp />
    </>
  );
};

export default Post;
