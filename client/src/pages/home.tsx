import { useEffect, useState } from 'react';
import { NewPost, PostComp } from '../components';
import axios from '../libs/axios';

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const postData = await axios.get('/post/all');

        setData(postData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <NewPost />
      <div className="flex flex-col">
        {loading ? (
          <div className="self-center">
            <h1 className="text-xl font-bold">Loading</h1>
          </div>
        ) : data?.length > 0 ? (
          data.map((item: any) => (
            <PostComp
              id={item._id}
              key={item._id}
              text={item.text}
              authorId={item.authorId}
              comments={item.comments}
              data={item.createdAt}
            />
          ))
        ) : (
          <div className="self-center">
            <h1 className="text-xl font-bold">Posts empty</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
